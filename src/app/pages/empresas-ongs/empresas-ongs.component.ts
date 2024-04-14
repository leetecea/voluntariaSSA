import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListaEmpresasComponent } from '../../components/lista-empresas/lista-empresas.component';
import { EmpresasOngs } from '../../interface/EmpresasOngs';
import { RequestService } from '../../services/requests.service';

@Component({
  selector: 'app-empresas-ongs',
  standalone: true,
  imports: [
    CommonModule,
    ListaEmpresasComponent
  ],
  templateUrl: './empresas-ongs.component.html',
  styleUrl: '../vagas/vagas.component.scss'
})
export class EmpresasOngsComponent {
  listaDeEmpresasOngs: EmpresasOngs[] = [];

  constructor(private requestsService: RequestService){
    this.requestsService.getAllEmpresasOngs().then((listaDeEmpresasOngs : EmpresasOngs[]) => {
      this.listaDeEmpresasOngs = listaDeEmpresasOngs;;
    })
  }
}
