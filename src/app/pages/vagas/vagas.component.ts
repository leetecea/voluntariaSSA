import { CommonModule } from '@angular/common';
import { Vagas } from './../../interface/Vagas';
import { Component } from '@angular/core';
import { VagasService } from '../../services/vagas.service';
import { ListaVagasComponent } from '../../components/lista-vagas/lista-vagas.component';


@Component({
  selector: 'app-vagas',
  standalone: true,
  imports: [
    CommonModule,
    ListaVagasComponent
  ],
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.scss'
})
export class VagasComponent {
  listaDeVagas: Vagas[] = [];

  constructor(private vagasService: VagasService){
    this.vagasService.getAllVagas().then((listaDeVagas : Vagas[]) => {
      this.listaDeVagas = listaDeVagas;;
    })
  }
}
