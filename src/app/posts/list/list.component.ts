import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-posts-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  posts: any[] = [];
  loading = true;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  private fetchPosts(): void {
    this.postsService.getPosts().subscribe({
      next: (response) => {
        this.posts = response;
        this.loading = false;
      },
      error: () => {
        alert('Error al obtener los posts.');
        this.loading = false;
      },
    });
  }
}
