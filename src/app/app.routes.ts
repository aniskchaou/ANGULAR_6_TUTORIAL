import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {RouterModule,Routes} from '@angular/router';

export const ROUTES:Routes=[{path:'comp1',component:FormulaireComponent},
{path:'comp2',component:MySecondComponentComponent},
{path:'comp1/:param',component:FormulaireComponent},
{path:'',redirectTo:'comp1',pathMatch:'full'}];
