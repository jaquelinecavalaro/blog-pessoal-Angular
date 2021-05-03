import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector:'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  

  constructor(public auth: AuthService,
    public router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      //ESSE ENVIRONMENT FAZ COM QUE MEU USUARIO NOME FOTO SEJAM CHAMADOS DEPOIS QUE EU LOGAR!
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id

      this.router.navigate(['/inicio'])
      
    }, erro=>{
      if(erro.status == 500){
        alert('usuario ou senha incorreto!')
      }
    })
  }

}
