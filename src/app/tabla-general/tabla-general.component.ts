import { Component, OnInit } from '@angular/core';
import { ListaDeComidaService } from '../lista-de-comida.service';
import { Comida } from '../interfaces/comida';

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrl: './tabla-general.component.css',
})
export class TablaGeneralComponent implements OnInit {
  comidas: Comida[] = [];
  constructor(private serviceComida: ListaDeComidaService) {}

  ngOnInit(): void {
    this.comidas = this.serviceComida.getComidas();
  }
}
