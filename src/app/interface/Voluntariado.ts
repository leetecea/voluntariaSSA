import { Usuarios } from "./Usuarios";
import { Vagas } from "./Vagas";

export interface Voluntariado {
  vagas: Vagas[],
  usuarios: Usuarios[]
}
