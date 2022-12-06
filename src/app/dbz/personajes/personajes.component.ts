import { Component} from '@angular/core';
import { Personaje } from "../interfaces/dbz.interface";
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //EL DECORADOR INPUT 
  //permitira que nos vengan propiedades y caracteristicas de otro componente
    //Podremos rellenar personajes de los datos de otra propiedad de otro componente
    //Usaremos para ello:
    //este componenete y pondremos [nombrePropiedad] = "propiedadComponenteDondeEstemos"
      //@Input() personajes: Personaje[] = [];

      //Llamamos al getter del servicio para obtener los personajes
      //Asi nuestro HTML puede seguir trabajando
      get personajes(): Personaje[]{
        return this.dbzService.personajes

      }

      constructor(private dbzService: DbzService){

      }
    
}
