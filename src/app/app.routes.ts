import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BarraNavegacionComponent } from './pages/barra-navegacion/barra-navegacion.component';
import { InicioCiudadesComponent } from './pages/inicio-ciudades/inicio-ciudades.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:BarraNavegacionComponent,
        children:[
            {
                path:'inicioCiudades',
                component:InicioCiudadesComponent
            }
        ]
    }
];
