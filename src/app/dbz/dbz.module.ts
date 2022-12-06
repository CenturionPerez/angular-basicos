import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,//este acordarse que solo lo ponemos si utilicemos tecnologia en el html ng
    //Por defecto cuando creamos el componente nos lo importa
    FormsModule //importa un tipo de formularios reactivos
  ],
  exports:[
    MainPageComponent,
    AgregarComponent
  ],
  providers:[//Aqui van los servicios entre otras cosas
    DbzService
  ]
})
export class DbzModule { }
