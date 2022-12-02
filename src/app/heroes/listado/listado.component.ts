import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Ironman","Hulk","Spiderman","Thor","Capitán Ámerica"];
  deleteHeroe: string = "";

  borrarHeroe(){
    console.log("borrando...");
    this.deleteHeroe = this.heroes.shift() || ""; //Si devuelve undefined devolvemos string vacio
  }
}
