import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-bootstrap',
  templateUrl: './com-bootstrap.component.html',
  styleUrls: ['./com-bootstrap.component.css']
})
export class ComBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alerta(){
    console.log('hola')
  }
  public titulo = "gg"
}

