import { Component, OnInit } from '@angular/core';
import { OpenweathermapComponent } from '../../services/openweathermap/openweathermap.component';

@Component({
  selector: 'app-inicio-ciudades',
  standalone: true,
  imports: [OpenweathermapComponent],
  templateUrl: './inicio-ciudades.component.html',
  styleUrl: './inicio-ciudades.component.css'
})

export class InicioCiudadesComponent implements OnInit{
  
  weatherData: any;
  city: string = '';
  
  constructor(private weatherService: OpenweathermapComponent) { }
  
  ngOnInit() {
  }

  // Método para obtener el clima
  getWeather() {
    this.weatherService.getWeatherByCity(this.city).subscribe((data: any) => {
    this.weatherData = data;
    console.log(this.weatherData)
    console.log(this.weatherData.main.temp)
  });
  }

  isMadridActive: boolean = true;
  isBarcelonaActive: boolean = true;
  isAlicanteActive: boolean = true;
  isSevillaActive: boolean = true;
  isOrenseActive: boolean = true;
  isBilbaoActive: boolean = true;
  isToledoActive: boolean = true;
  isSalamancaActive: boolean = true;
  isValenciaActive: boolean = true;
  
  madrid(){
    if (this.isMadridActive){
      this.cerrarVentanas();
      this.city = 'Madrid';
      this.getWeather();
      this.isMadridActive = !this.isMadridActive;
    }else{
      this.isMadridActive = true;
    }
  }

  barcelona(){
    if (this.isBarcelonaActive){
      this.cerrarVentanas();
      this.city = 'Barcelona';
      this.getWeather();
      this.isBarcelonaActive = !this.isBarcelonaActive;
    }else{
      this.isBarcelonaActive = true;
    }
  }

  alicante(){
    if (this.isAlicanteActive){
      this.cerrarVentanas();
      this.city = 'Alicante';
      this.getWeather();
      this.isAlicanteActive = !this.isAlicanteActive;
    }else{
      this.isAlicanteActive = true;
    }
  }

  sevilla(){
    if (this.isSevillaActive){
      this.cerrarVentanas();
      this.city = 'Sevilla';
      this.getWeather();
      this.isSevillaActive = !this.isSevillaActive;
    }else{
      this.isSevillaActive = true;
    }
  }

  orense(){
    if (this.isOrenseActive){
      this.cerrarVentanas();
      this.city = 'Orense';
      this.getWeather();
      this.isOrenseActive = !this.isOrenseActive;
    }else{
      this.isOrenseActive = true;
    }
  }

  bilbao(){
    if (this.isBilbaoActive){
      this.cerrarVentanas();
      this.city = 'Bilbao';
      this.getWeather();
      this.isBilbaoActive = !this.isBilbaoActive;
    }else{
      this.isBilbaoActive = true;
    }
  }

  toledo(){
    if (this.isToledoActive){
      this.cerrarVentanas();
      this.city = 'Toledo';
      this.getWeather();
      this.isToledoActive = !this.isToledoActive;
    }else{
      this.isToledoActive = true;
    }
  }

  salamanca(){
    if (this.isSalamancaActive){
      this.cerrarVentanas();
      this.city = 'Salamanca';
      this.getWeather();
      this.isSalamancaActive = !this.isSalamancaActive;
    }else{
      this.isSalamancaActive = true;
    }
  }

  valencia(){
    if (this.isValenciaActive){
      this.cerrarVentanas();
      this.city = 'Valencia';
      this.getWeather();
      this.isValenciaActive = !this.isValenciaActive;
    }else{
      this.isValenciaActive = true;
    }
  }

  cerrarVentanas(){
    this.isMadridActive= true;
    this.isBarcelonaActive = true;
    this.isAlicanteActive = true;
    this.isSevillaActive = true;
    this.isOrenseActive = true;
    this.isBilbaoActive = true;
    this.isToledoActive = true;
    this.isSalamancaActive = true;
    this.isValenciaActive = true;
  }
}
