import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'face-snap',
  imports: [DatePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  userHasSnapped: any;
  snapButtonText: string = 'Oh Snap!';

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  


  onSnap(): void {
    if (this.userHasSnapped) {
      this.snap();
    } else {
      this.snaps++;
    }
  }

unSnap() {
    this.snaps--;
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
}

snap() {
    this.snaps++;
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}
}