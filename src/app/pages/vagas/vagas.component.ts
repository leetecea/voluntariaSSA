import { CommonModule } from '@angular/common';
import { Vagas } from './../../interface/Vagas';
import { Component } from '@angular/core';
import { ListaVagasComponent } from '../../components/lista-vagas/lista-vagas.component';
import { RequestService } from '../../services/requests.service';

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

  constructor(private requestsService: RequestService){
    this.requestsService.getAllVagas().then((listaDeVagas : Vagas[]) => {
      this.listaDeVagas = listaDeVagas;;
    })
  }


}
