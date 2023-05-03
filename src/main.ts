import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class App {
  name = 'Michelle';
  cargo = 'Estudiante';
  a = 20;
  b = 2;
  c = 0;
  contador = 0;

 

  sumar() {
    console.log('sumar', this.a);
    this.c = +this.a + +this.b;
  }
  

  restar(){
    console.log('restar', this.a);
    this.c = 0 + this.a - eval(""+this.b)

  }

  multiplicar(){
    console.log('multiplicar', this.a);
    this.c = 0 + this.a * eval(""+this.b)
  }

  dividir(){
    console.log('dividir', this.a);
    this.c = 0 + this.a / eval(""+this.b)
  }
}

bootstrapApplication(App);