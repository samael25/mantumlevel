import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'src/app/auth/auth.interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: Auth | undefined;

  get auth(): Auth
{
  return {...this._auth!}
}  
constructor(private http: HttpClient) { }


getLogin( userName: string) {
  return this.http.get<Auth[]>(`http://localhost:3000/usuarios/findOneByName/${userName}`)
  .pipe(
    tap(auth => this._auth = auth[0])
  )
}

}
