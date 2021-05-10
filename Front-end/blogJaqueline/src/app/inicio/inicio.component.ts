import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  foto = environment.foto
  nome = environment.nome
  idUser = environment.id

  user: User = new User()
  tema: Tema = new Tema()

  postagem: Postagem = new Postagem
  listaTemas: Tema[]
  listaPostagens: Postagem[]
  idTema: number

  constructor(
    private router: Router,
    private postService: PostagemService,
    private temaServic: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert ('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.getAllTemas()
  }

  getAllPostagens(){
    this.postService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  getAllTemas(){
    this.temaServic.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  findByUser(){
    this.authService.getByIdUSer(this.idUser).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  findByIdTema(){
    this.temaServic.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  postar(){
    this.postagem.tema = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    this.postService.postPostagem(this.postagem).subscribe((resp: Postagem)=> {
    this.postagem = resp
    alert('postagem realziada com sucesso')})
    this.postagem = new Postagem
    this.getAllPostagens()
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}
