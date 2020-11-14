import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TablaUsuariosComponent } from '../components/tabla-usuarios/tabla-usuarios.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TablaUsuariosComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,    
  ],
  bootstrap : [TablaUsuariosComponent]

})


export class UsuariosModule { }
