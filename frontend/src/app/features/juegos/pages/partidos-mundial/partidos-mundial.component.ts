import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { partidoMundial } from '../../../../models/partido-mundial.model';
import { PartidosMundial } from '../../../../services/partidos-mundial.service.js';

@Component({
    selector: 'juegos-partidos-mundial',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './partidos-mundial.component.html',
})
export class PartidosMundialComponent implements OnInit {
    partido?: partidoMundial;
        respuestaJugador1: string = '';
        respuestaJugador2: string = '';
        resultadoCorrecto: boolean | null = null;
    
        puntuacionActual: number = 0;
        puntuacionMaxima: number = 0;
        mostrarMensaje: boolean = true;
    
        constructor(private partidosService: PartidosMundial) { }
    
        ngOnInit(): void {
            this.cargarPartido();
            this.cargarPuntuacionMaxima();
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
            if (!this.respuestaJugador1.trim() || !this.respuestaJugador2.trim()) return;

            const resultadoLimpio = this.partido.resultado.split("(")[0].trim(); // no contar tanda de penales
    
            this.resultadoCorrecto =
                this.respuestaJugador1.trim() + "-" + this.respuestaJugador2.trim() === resultadoLimpio;
    
            this.mostrarMensaje = true;
    
            if (this.resultadoCorrecto) {
                this.puntuacionActual++;
                if (this.puntuacionActual > this.puntuacionMaxima) {
                    this.puntuacionMaxima = this.puntuacionActual;
                    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                        localStorage.setItem("puntuacionMaxima-juegos-partidos-mundial", this.puntuacionMaxima.toString());
                    }
                }
            } else {
                this.puntuacionActual = 0;
            }
    
            setTimeout(() => {
                this.mostrarMensaje = false;
                this.cargarPartido();
                this.respuestaJugador1 = '';
                this.respuestaJugador2 = '';
                this.resultadoCorrecto = null;
            }, 3000);
        }
    
        cargarPuntuacionMaxima(): void {
            if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                const guardada = localStorage.getItem("puntuacionMaxima-juegos-partidos-mundial");
                if (guardada) {
                    this.puntuacionMaxima = parseInt(guardada, 10);
                }
            }
        }

}