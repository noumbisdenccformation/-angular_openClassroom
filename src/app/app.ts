// src/app/app.ts

// Mettez à jour cet import pour inclure 'signal'
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// ... autres imports

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  // ... autres configurations ...
  imports: [RouterOutlet, /* ... */],
})
export class App {
    // ➡️ AJOUTEZ CETTE LIGNE :
    title = signal('Nom de votre projet Angular');
    
    // ... reste de la classe ...
}