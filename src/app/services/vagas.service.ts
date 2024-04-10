import { Injectable } from '@angular/core';
import { Vagas } from '../interface/Vagas';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  url = 'http://localhost:3000/vagas';

  async getAllVagas(): Promise<Vagas[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getVagaById(id: number): Promise<Vagas | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() { }
}
