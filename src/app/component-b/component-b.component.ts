import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() setOne: any;
  @Output() emitOne: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.setOne);
  }

  sendDataToParent() {
    this.emitOne.emit('something');
  }
}
