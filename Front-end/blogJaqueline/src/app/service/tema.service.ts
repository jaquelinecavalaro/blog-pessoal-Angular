import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }


    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  /* PRECISA DE ARRAY POIS VOU TRAZER MTS TEMAS */
    getAllTema(): Observable<Tema[]>{
        return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)
    }

    /* quando colocar para publicar o tema, ele vai entrar aqui */
    postTema(tema: Tema): Observable<Tema>{
      return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
    }

    putTema(tema: Tema): Observable<Tema>{
      return this.http.put<Tema>('http://localhost:8080/tema', tema, this.token)
    }

    deleteTema(id: number){
      return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
    }
/* VAMOS PEGAR O TEMA RESPONSAVEL PELO ID */
    getByIdTema(id: number): Observable<Tema>{
      return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token)
    }
}
