import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.stars()
  }

  stars() 
  {
      let count = 50;
      let scene = document.querySelector('.scene');
      let i = 0;

      while (i < count) 
      {
          let star = document.createElement('i');
          let x = Math.floor(Math.random() * window.innerWidth);

          let duration = Math.random() * 1;
          let h = Math.random() * 100;

          star.style.left = x + 'px';
          star.style.width = 1 + 'px';
          star.style.height = 50 + h + 'px';
          star.style.animationDuration = duration + 's';

          if (scene != null){
            scene.appendChild(star)
            }
          i++;
      }
  }
}

    
    
    

