import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, NavController, IonItem, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
  standalone: true,
  imports: [IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard,
            IonCardTitle, IonCardHeader, IonCardContent]
})
export class DietaPage {
  public carbs: number = 0;
  public protein: number = 0;
  public fiber: number = 0;
  public total: number = 0;

  // Método para calcular el porcentaje
  getPercentage(value: number): number {
    return this.total > 0 ? (value / this.total) * 100 : 0;
  }

  // Método para actualizar el total
  updateTotal() {
    this.total = this.carbs + this.protein + this.fiber;
  }
}
