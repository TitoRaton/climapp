import { Component } from '@angular/core';
import { InicioCiudadesComponent } from '../inicio-ciudades/inicio-ciudades.component';
import 'animate.css';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [InicioCiudadesComponent],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})

export class BarraNavegacionComponent {

}
