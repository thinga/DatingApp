import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abfrage-registen',
  templateUrl: './abfrage-registen.component.html',
  styleUrls: ['./abfrage-registen.component.scss']
})
export class AbfrageRegistenComponent implements OnInit {
  registerMode = false;
  constructor() { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
