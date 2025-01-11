import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-posts-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  createForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      image: ['', Validators.required],
    });
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.createForm.patchValue({ image: file });
      this.createForm.get('image')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.createForm.invalid) return;

    const formData = new FormData();
    formData.append('title', this.createForm.get('title')?.value);
    formData.append('image', this.createForm.get('image')?.value);

    this.postsService.createPost(formData).subscribe({
      next: () => {
        alert('Post creado exitosamente.');
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        alert(err.error.message || 'Error al crear el post.');
      },
    });
  }
}
