import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ejercicios-con-equipo',
  templateUrl: './ejercicios-con-equipo.page.html',
  styleUrls: ['./ejercicios-con-equipo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard,
            IonCardTitle, IonCardHeader, IonCardContent]
})
export class EjerciciosConEquipoPage{

  EjerciciosConEquipo = {
    1: { name: 'Press de banca', description: 'El press de banca trabaja principalmente el pecho y los tríceps.' },
    2: { name: 'Peso muerto', description: 'Un ejercicio compuesto que fortalece la parte posterior del cuerpo.' },
    3: { name: 'Sentadillas con barra', description: 'Este ejercicio es excelente para trabajar las piernas y los glúteos.' },
    4: { name: 'Press militar', description: 'Fortalece los hombros y la parte superior del cuerpo.' },
    5: { name: 'Remo con barra', description: 'Un ejercicio que trabaja la espalda y los bíceps.' },
    6: { name: 'Curl de bíceps con mancuernas', description: 'Para fortalecer los bíceps.' },
    7: { name: 'Extensión de tríceps en polea', description: 'Ejercicio para trabajar los tríceps.' },
    8: { name: 'Abdominales en máquina', description: 'Ayuda a fortalecer los abdominales.' },
  };

  constructor(private navCtrl: NavController) {}

  goToExerciseDetail(id: string, type: string) {
    this.navCtrl.navigateForward(`/exercise-detail/${id}/${type}`);
  }
}