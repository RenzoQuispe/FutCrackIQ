import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { partidoUCL } from '../../../../models/partido-ucl.model';
import { PartidosUCL } from '../../../../services/partidos-ucl.service.js';

@Component({
    selector: 'juegos-partidos-ucl',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './partidos-ucl.component.html',
})
export class PartidosUCLComponent implements OnInit {
    partido?: partidoUCL;
    respuestaJugador: string = '';
    resultadoCorrecto: boolean | null = null;

    constructor(private partidosService: PartidosUCL) { }

    ngOnInit(): void {
        this.cargarPartido();
    }

    cargarPartido(): void {
        this.partidosService.getUnPartido().subscribe({
            next: (data) => {
                this.partido = data[0];
                console.log("Nuevo partido cargado:", this.partido);
            },
            error: (err) => console.error('Error al obtener partido', err)
        });
    }

    comprobarRespuesta(): void {
        if (!this.partido) return;

        this.resultadoCorrecto =
            this.respuestaJugador.trim() === this.partido.resultado.trim();
    }
}