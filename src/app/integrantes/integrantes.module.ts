import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { IntergantesRoutingModule } from './intergantes-routing.module';
import { MaterialModule } from './material/material.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { InfoComponent } from './pages/info/info.component';
import { LayoutModule } from '@angular/cdk/layout';
import { VideoComponent } from './pages/video/video.component';
import { FormsModule } from '@angular/forms';
// import { ImagenPipe } from './piprs/imagen.pipe';





@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    InfoComponent,
    VideoComponent,
    // ImagenPipe
  ],
  imports: [
    YouTubePlayerModule,
    CommonModule,
    IntergantesRoutingModule,
    LayoutModule,
    MatGridListModule,
    FlexLayoutModule,
    MaterialModule,
   FormsModule
  ]
})
export class IntegrantesModule { }
