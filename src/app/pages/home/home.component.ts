import { VagasService } from './../../services/vagas.service';
import { Component } from '@angular/core';
import { ListaVagasComponent } from '../../components/lista-vagas/lista-vagas.component';
import { Vagas } from '../../interface/Vagas';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ListaVagasComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  listaDeVagas: Vagas[] = [];

  constructor(private vagasService: VagasService){
    this.vagasService.getAllVagas().then((listaDeVagas : Vagas[]) => {
      this.listaDeVagas = listaDeVagas;;
    })
  }

}
