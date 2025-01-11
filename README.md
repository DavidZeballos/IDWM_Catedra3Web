# Cat3_Web

Frontend desarrollado en Angular 19 para la gestión de usuarios y posts, con integración a un backend basado en .NET y estilos personalizados utilizando **TailwindCSS** y **Flowbite**.

---

## **Requisitos previos**

1. **Node.js**:
   - Instalar la última versión estable desde [nodejs.org](https://nodejs.org/).

2. **Angular CLI**:
   - Instalar el CLI globalmente:
   ```bash
   npm install -g @angular/cli
   ```

3. **Backend activo**:
   - Asegúrate de que el backend de `Cat3_API` esté ejecutándose correctamente en el puerto configurado.

---

## **Instalación**

### **Clonar el repositorio**
```bash
git clone <URL-del-repositorio>
cd Cat3_Web
```

### **Instalar dependencias**
```bash
npm install
```

---

## **Configuración**

### **Variables de entorno**
Crea el archivo `src/environments/environment.ts` con la siguiente estructura:

```typescript
// export const environment = {
//   production: false,
//   apiUrl: 'http://localhost:5012/api',
// };
```

Para producción, crea también el archivo `src/environments/environment.prod.ts`:

```typescript
 export const environment = {
   production: true,
   apiUrl: 'http://tu-dominio-produccion.com/api',
 };
```

---

## **Comandos para ejecutar**

1. **Modo desarrollo**:
   ```bash
   npm start
   ```
   - El frontend estará disponible en [http://localhost:4200](http://localhost:4200).
