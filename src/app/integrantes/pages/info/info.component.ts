import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IntegrantesService } from '../../services/integrantes.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
    `img{
      width: 100%;
      border-radius: 10px;
    }`
  ]
})
export class InfoComponent implements OnInit, AfterViewInit {
  usuario: any;
  @Input() Data: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly integranteService: IntegrantesService,
    private router:Router
  ) { }

  async ngAfterViewInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.integranteService.getUsuario(id).subscribe( res => {
        console.log(res);
        this.usuario = res[0]
      })
    });
  }


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.integranteService.getIntegrante(id))
    )
    .subscribe(usuario =>this.usuario = usuario);
  }
  regresar() {
    this.router.navigate(['/integrantes/listado']);
  }

}
