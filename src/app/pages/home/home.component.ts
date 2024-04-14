import { Component } from '@angular/core';
import { ListaVagasComponent } from '../../components/lista-vagas/lista-vagas.component';
import { Vagas } from '../../interface/Vagas';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RequestService } from '../../services/requests.service';

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

  constructor(private requestsService: RequestService){
    this.requestsService.getAllVagas().then((listaDeVagas : Vagas[]) => {
      this.listaDeVagas = listaDeVagas;;
    })
  }

}
