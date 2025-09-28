import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FaceSnap]
})
export class AppComponent {
  
}