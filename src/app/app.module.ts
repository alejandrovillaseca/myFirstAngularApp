import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ComBootstrapComponent } from './components/com-bootstrap/com-bootstrap.component';
import { FormsModule } from '@angular/forms';
import { MyPipeComponent } from './components/my-pipe/my-pipe.component';
import { AFarenheitPipe } from './pipes/a-farenheit.pipe';
import { MyComp2Component } from './components/my-comp2/my-comp2.component';
import { MyFormularioComponent } from './components/my-formulario/my-formulario.component'


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    ComBootstrapComponent,
    MyPipeComponent,
    AFarenheitPipe,
    MyComp2Component,
    MyFormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
