import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ejercicios-con-equipo',
  templateUrl: './ejercicios-con-equipo.page.html',
  styleUrls: ['./ejercicios-con-equipo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EjerciciosConEquipoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
