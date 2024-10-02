import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonButton, IonToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, homeOutline, homeSharp, calculator, calculatorOutline, calculatorSharp, fitness, fitnessOutline, fitnessSharp, person, personOutline, personSharp, nutrition, nutritionOutline, nutritionSharp } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';  // Importa FormsModule para que ngModel funcione correctamente

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonButton, IonToggle, FormsModule],  // Asegúrate de que FormsModule esté incluido aquí
})
export class AppComponent implements OnInit {
  
  paletteToggle = false;

  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Calculadora IMC', url: '/imc-calculator', icon: 'calculator' },
    { title: 'Ejercicios con Equipo', url: '/ejercicios-con-equipo', icon: 'fitness' },
    { title: 'Ejercicios sin Equipo', url: '/ejercicios-sin-equipo', icon: 'person' },
    { title: 'Recomendaciones de Dieta', url: '/folder/dieta', icon: 'nutrition' },
  ];

  constructor() {
    addIcons({ home, homeOutline, homeSharp, calculator, calculatorOutline, calculatorSharp, fitness, fitnessOutline, fitnessSharp, person, personOutline, personSharp, nutrition, nutritionOutline, nutritionSharp });
  }

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.initializeDarkPalette(prefersDark.matches);
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleChange(ev: { detail: { checked: any; }; }) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  toggleDarkPalette(shouldAdd: boolean | undefined) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
