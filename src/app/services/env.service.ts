import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://lbcsisfo.ideameambo.com/api/';
  // API_URL = 'http://localhost:8000/api/';
  constructor() { }
}
