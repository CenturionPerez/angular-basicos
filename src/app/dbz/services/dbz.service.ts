import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()//Los servicios tienen que tener el decorador Injectable
//Es una clase que se va a poder injectar y podemos hacer uso de sus datos facilmente 
//desde cualquier modulo o componente

//IMPORTANTE-> DEBEMOS TENER EL EXPORT PARA IMPORTARLO ENE L MODULO DENTRO DE PROVIDERS
export class DbzService{

    private _personajes: Personaje[] = [
        {
        nombre: "Goku",
        poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 7500
        }
    ];

    //Metodo que permite devolver la propiedad privada
    get personajes():Personaje[]{
        return [...this._personajes];//Practica del JS que no es necesaria pero conviene
        //Esto desreferencia el objeto
    }
    constructor(){}

    //Metodo que actualiza la propiedad privada ->Funciona como un setter en JAVA
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}

