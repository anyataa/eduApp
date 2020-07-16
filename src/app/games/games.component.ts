import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  materials = [
    ['Intro to Casting', 'assets/images/games.png', 'The History of casting will excite and increase your interest to learn more about Casting Process'],
    [ 'Steps of Casting', 'assets/images/games6.png', 'The material and the tools for casting need to be prepared first'],
    ['Get to Know casting machine','assets/images/games5.png', 'Process of casting needs to be done with focus and follow through all of the required steps'],
    ['Finishing',  'assets/images/games4.jpg', 'finishing is important in order to achieve the requirement and meets the specification']
  ]


  pop = false
  class = 'modal'


  constructor() { }

  ngOnInit(): void {
  
  }
  
  choose:number;
  click(index:number) {
    console.log(index);
    this.choose = index
    this.class='modal open';
    this.pop=true;
  }




  close() {
      this.pop = false;
      
  }

}