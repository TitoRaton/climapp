import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

@Component({
  selector: 'app-openweathermap',
  standalone: true,
  imports: [],
  templateUrl: './openweathermap.component.html',
  styleUrl: './openweathermap.component.css'
})

export class OpenweathermapComponent {
  private apiKey = '6f2960c250d3457672cb78b081457a76';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  
  constructor(private http: HttpClient) { }
  
  // Método para obtener el clima por ciudad
  getWeatherByCity(city: string): Observable<any> {
  const url =`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=es`;
  return this.http.get(url);
  }
}
