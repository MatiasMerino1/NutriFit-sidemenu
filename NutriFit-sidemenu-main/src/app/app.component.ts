import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, homeOutline , homeSharp , calculator, calculatorOutline, calculatorSharp, fitness, fitnessOutline, fitnessSharp, person, personOutline, personSharp, nutrition, nutritionOutline, nutritionSharp} from 'ionicons/icons';
import {IonicModule} from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Calculadora IMC', url: '/imc-calculator', icon: 'calculator' },
    { title: 'Ejercicios con Equipo', url: '/ejercicios-con-equipo', icon: 'fitness' },
    { title: 'Ejercicios sin Equipo', url: '/ejercicios-sin-equipo', icon: 'person' },
    { title: 'Recomendaciones de Dieta', url: '/folder/dieta', icon: 'nutrition' },
  ];
  constructor() {
    addIcons({ home, homeOutline, homeSharp ,calculator, calculatorOutline, calculatorSharp , fitness, fitnessOutline, fitnessSharp, person, personOutline, personSharp, nutrition, nutritionOutline, nutritionSharp});
  }
}
