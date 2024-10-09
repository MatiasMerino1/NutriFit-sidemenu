import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, NavController, IonItem, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-ejercicios-sin-equipo',
  templateUrl: './ejercicios-sin-equipo.page.html',
  styleUrls: ['./ejercicios-sin-equipo.page.scss'],
  standalone: true,
  imports: [IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard,
            IonCardTitle, IonCardHeader, IonCardContent]
})
export class EjerciciosSinEquipoPage {

  EjerciciosSinEquipo = {
    1: { name: 'Flexiones', description: 'Trabaja el pecho, hombros y tríceps.' },
    2: { name: 'Sentadillas', description: 'Un ejercicio clásico para piernas y glúteos.' },
    3: { name: 'Zancadas', description: 'Fortalece las piernas y glúteos.' },
    4: { name: 'Plancha', description: 'Trabaja el core y mejora la estabilidad.' },
    5: { name: 'Abdominales', description: 'Fortalece los abdominales.' },
    6: { name: 'Saltos', description: 'Mejora la resistencia cardiovascular.' },
    7: { name: 'Burpees', description: 'Ejercicio completo que mejora la fuerza y resistencia.' },
    8: { name: 'Mountain climbers', description: 'Trabaja el core y mejora la resistencia.' },
  };

  constructor(private navCtrl: NavController) {}

  goToExerciseDetail(key: string, type: string) {
    this.navCtrl.navigateForward(`/exercise-detail/${key}/${type}`);
  }
}
