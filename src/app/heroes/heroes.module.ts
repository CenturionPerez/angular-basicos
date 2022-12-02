import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule //Si utilizamos directivas ng o algo similar en un modulo creado
        //tenemos que usar en imports CommonModule para que se puedan usar en el html
    ]
})
export class HeroesModule { }