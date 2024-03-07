import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaDeComidaService } from '../lista-de-comida.service';
import { Comida } from '../interfaces/comida';

@Component({
  selector: 'app-comida-detail',
  templateUrl: './comida-detail.component.html',
  styleUrl: './comida-detail.component.css',
})
export class ComidaDetailComponent implements OnInit {
  comida: Comida | undefined;
  constructor(
    private route: ActivatedRoute,
    private serviceComida: ListaDeComidaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.comida = this.serviceComida.getComidaById(id);
    });
  }
}
