import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  //Los incializamos por defecto
    //Debemos usar el tipo especial EventEmitter e indicar que vamos a emitir
      //En este caso, un personaje EventEmitter<Personaje>
      //IMPORTANTE->EventEmitter() devuelve un generico por lo tanto podriamos poner otro valor si quisieramos
      //Siempre tenemos que decir el tipo de EventEmitter
        //@Output() nuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();
  
    //Recibiremos lo que enviamos desde otro controlador
    @Input() nuevo: Personaje = {
        nombre:"",
        poder:0
    };
    /*

      agregar( event: any ){
        event.preventDefault();//Esto permite que no se refresque la pagina
        console.log( event );
      };

    */
      constructor(private dbzService: DbzService){}

      agregar(){
        if(this.nuevo.nombre.trim().length === 0){return;}
        //Mediante el metodo .emit()
        //Rellenaremos el nuevo personaje y lo enviaremos
        //Todo gracias a que nuevoPersonaje es de tipo Emitir
            //this.nuevoPersonaje.emit(this.nuevo);
            //Llamamos al metodo del servicio para insertar el nuevo dato a agregar
            this.dbzService.agregarPersonaje(this.nuevo);
            this.nuevo = {
              nombre:"",
              poder: 0
          };
        console.log(this.nuevo);
      };


}
