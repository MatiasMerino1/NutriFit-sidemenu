import { Component, OnInit,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.page.html',
  styleUrls: ['./imc-calculator.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ImcCalculatorPage implements OnInit {

  height!: number;
  weight!: number;
  imc!: number;

  calculateIMC() {
    if (this.height && this.weight) {
      this.imc = this.weight / ((this.height / 100) ** 2);
    }
}
  constructor() { }

  ngOnInit() {
    
  }
}
