import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/integrantes.interface';
import { IntegrantesService } from '../../services/integrantes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `.marg {
      margin: 7px 7px;
    }`
  ]
})
export class ListadoComponent implements OnInit {
 integrantes: any[] = [];
 usuario!: Usuario;
 
  constructor(
    private readonly integrantesService: IntegrantesService,
    
  ) { }

  ngOnInit(): void {
    
    this.getUsuarios();
  }

  getUsuarios(){
    
    this.integrantesService.getUsuarios().subscribe(res => {
      this.integrantes = res;
      console.log( this.integrantes );
    })
  }

}
