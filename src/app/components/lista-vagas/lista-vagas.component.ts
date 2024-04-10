import { Component, Input } from '@angular/core';
import { Vagas } from '../../interface/Vagas';

@Component({
  selector: 'app-lista-vagas',
  standalone: true,
  imports: [],
  templateUrl: './lista-vagas.component.html',
  styleUrl: './lista-vagas.component.scss'
})
export class ListaVagasComponent {
  @Input() listaDeVagas!: Vagas;

}
