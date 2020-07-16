import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  materials = [
    ['History', 'assets/images/cor1.jpg', 'The History of casting will excite and increase your interest to learn more about Casting Process'],
    [ 'Preparing', 'assets/images/cor2.jpg', 'The material and the tools for casting need to be prepared first'],
    ['Process',  'assets/images/cor3.jpg', 'Process of casting needs to be done with focus and follow through all of the required steps'],
    ['Finishing',  'assets/images/cor4.jpg', 'finishing is important in order to achieve the requirement and meets the specification']
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
