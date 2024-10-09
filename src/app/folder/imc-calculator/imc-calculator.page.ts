import { Component, OnInit,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonMenu, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, IonIcon, IonItem, IonLabel, IonMenuToggle, IonList, IonListHeader, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.page.html',
  styleUrls: ['./imc-calculator.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, RouterLink,IonMenu ,IonList,IonListHeader, IonLabel, IonMenuToggle, IonItem, IonIcon, IonContent, IonButtons, IonButton, IonMenuButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ImcCalculatorPage implements OnInit {


  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Calculadora IMC', url: '/imc-calculator', icon: 'calculator' },
    { title: 'Ejercicios con Equipo', url: '/ejercicios-con-equipo', icon: 'fitness' },
    { title: 'Ejercicios sin Equipo', url: '/ejercicios-sin-equipo', icon: 'person' },
    { title: 'Recomendaciones de Dieta', url: '/folder/dieta', icon: 'nutrition' },
  ];

  height!: number;
  weight!: number;
  imc!: number;

  calculateIMC() {
    if (this.height && this.weight) {
      this.imc = this.weight / ((this.height / 100) ** 2);
    }
}
  constructor() { }
  paletteToggle = false;
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
