import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cancion } from "src/app/interfaces/canciones.interface";

@Injectable({
    providedIn: 'root'
  })
  export class CancionesService {
  
    constructor(private http: HttpClient) {
      
     }
  
    getCanciones(): Observable<Cancion[]>{
      return this.http.get<Cancion[]>('http://localhost:3000/cancion/findAll');
    }

    getRola(id: number): Observable<Cancion> {
      return this.http.get<Cancion>(`http://localhost:3000/cancion/findOne/${id}`);
    }
  }
  