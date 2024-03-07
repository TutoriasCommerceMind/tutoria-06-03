import { Injectable } from '@angular/core';
import { Comida } from './interfaces/comida';

@Injectable({
  providedIn: 'root',
})
export class ListaDeComidaService {
  listaComida: Comida[] = [
    {
      id: 1,
      name: 'Hamburguesa',
      description: 'Hamburguesa con queso',
      image:
        'https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg',
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Pizza con queso',
      image:
        'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa-945x630.jpg',
    },
    {
      id: 3,
      name: 'Papas fritas',
      description: 'Papas fritas con queso',
      image:
        'https://phantom-marca.unidadeditorial.es/813d16708dc72860fd3cf319c9a245b5/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/04/16911461030527.jpg',
    },
  ];

  getComidas() {
    return this.listaComida;
  }

  getComidaById(id: any) {
    return this.listaComida.find((comida) => comida.id == id);
  }
}
