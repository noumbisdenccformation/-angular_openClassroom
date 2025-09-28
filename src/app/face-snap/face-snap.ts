import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap implements OnInit {
  title!: string;
  description!: string;
  createdAt!:Date;
  snaps!: number;

  ngOnInit(): void {
  this.title = 'Archibald';
  this.description = 'Mon meilleur ami depuis toujours !';
  this.createdAt = new Date();
  this.snaps = 5;
}

}

  

  

