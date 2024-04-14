import { Component, Input } from '@angular/core';
import { EmpresasOngs } from '../../interface/EmpresasOngs';

@Component({
  selector: 'app-lista-empresas',
  standalone: true,
  imports: [],
  templateUrl: './lista-empresas.component.html',
  styleUrl: '../lista-vagas/lista-vagas.component.scss'
})
export class ListaEmpresasComponent {
  @Input() listaDeEmpresasOngs!: EmpresasOngs;
}
