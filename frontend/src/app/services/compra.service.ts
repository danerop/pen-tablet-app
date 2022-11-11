import { Injectable } from '@angular/core';
import { comprasDeEjemplo } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor() { 
    
  }
  getAll() {
    return comprasDeEjemplo;
  }
}
