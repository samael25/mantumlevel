import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
videos=[
  {
    video:'hIPxOgPl5t8'
  },
  {
    video: 'xTgKRCXybSM'
  },
  {
    video: '4KKbbd6Ah9Y'
  },
  {
    video: '-3e8qYqj-0g'
  }
]

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      console.log(this.videos);
      
    }
  

}
