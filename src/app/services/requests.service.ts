import { Injectable } from '@angular/core';
import { Vagas } from '../interface/Vagas';
import { EmpresasOngs } from '../interface/EmpresasOngs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = 'http://localhost:3000';

  async getAllVagas(): Promise<Vagas[]> {
    const data = await fetch(`${this.url}/vagas`);
    return await data.json() ?? [];
  }

  async getAllEmpresasOngs(): Promise<EmpresasOngs[]> {
    const data = await fetch(`${this.url}/empresasOngs`);
    return await data.json() ?? [];
  }

  async getVagaById(id: number): Promise<Vagas | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() { }
}
