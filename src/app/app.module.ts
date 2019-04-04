import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {RouterModule,Routes} from '@angular/router';
import {ROUTES} from './app.routes'
//créer un chemin
/*
const ROUTES:Routes=[{path:'comp1',component:FormulaireComponent},
{path:'comp2',component:MySecondComponentComponent},
{path:'comp1/:param',component:FormulaireComponent},
{path:'',redirectTo:'comp1',pathMatch:'full'}];
*/


@NgModule({
  declarations: [
    AppComponent,
    MySecondComponentComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
