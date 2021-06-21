import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  public sendInputOne: string = 'user is testing';
  public outPutOne: any;

  constructor() {}

  ngOnInit() {}

  submitOne(event: any) {
    console.log(event, 'event');
    this.outPutOne = event;
  }
}
