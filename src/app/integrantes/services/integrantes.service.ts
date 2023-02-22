import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/integrantes.interface';

@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {

  constructor(private http: HttpClient) {
    
   }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios/findAll');
  }

  getUsuario(id: number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios/findOne/${id}`);
  }

  getIntegrante(id: string):Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:3000/usuarios/findOne/${id}`);
  }
}
