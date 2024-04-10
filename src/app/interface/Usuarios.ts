export interface Usuarios {
  id: number;
  lastName: string;
  firstName: string,
  age: number;
  photo: string;
  profession: string,
  description: string;
  experiencies: [
    {
      empresa: string,
      year: number,
      category: string | string[],
      description: string,
    }
  ]
}
