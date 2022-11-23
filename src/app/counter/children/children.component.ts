import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar() {
    this.contador = this.contador * 2;
  }

  dividir() {
    this.contador = this.contador / 2;
  }

}
