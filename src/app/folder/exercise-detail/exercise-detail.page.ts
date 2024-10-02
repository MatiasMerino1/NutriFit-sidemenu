import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EjerciciosConEquipoPage } from '../ejercicios-con-equipo/ejercicios-con-equipo.page';
import { EjerciciosSinEquipoPage } from '../ejercicios-sin-equipo/ejercicios-sin-equipo.page';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
  standalone: true,
  imports: [IonContent,IonHeader,IonTitle,IonToolbar]
})
export class ExerciseDetailPage implements OnInit {
  exerciseId: number = 0;
  exerciseName: string = '';
  exerciseDescription: string = '';

  // Define las propiedades para ejercicios
  exercisesWithEquipment: { [key: string]: { name: string; description: string } } = {};
  exercisesWithoutEquipment: { [key: string]: { name: string; description: string } } = {};

  constructor(
    private route: ActivatedRoute,
    private ejerciciosConEquipo: EjerciciosConEquipoPage,
    private ejerciciosSinEquipo: EjerciciosSinEquipoPage
  ) {
    // Inicializa las propiedades
    this.exercisesWithEquipment = this.ejerciciosConEquipo.EjerciciosConEquipo;
    this.exercisesWithoutEquipment = this.ejerciciosSinEquipo.EjerciciosSinEquipo;
  }

  ngOnInit() {
    // Obtiene el ID del ejercicio de los parámetros de la ruta
    this.exerciseId = Number(this.route.snapshot.paramMap.get('id'));
    const type = this.route.snapshot.paramMap.get('type');

    // Verifica el tipo y llama al método para establecer detalles
    if (type === 'equipment') {
      this.setExerciseDetails(this.exercisesWithEquipment);
    } else {
      this.setExerciseDetails(this.exercisesWithoutEquipment);
    }
  }

  private setExerciseDetails(exercises: { [key: string]: { name: string; description: string } }) {
    // Convierte el ID del ejercicio a cadena
    const exerciseKey = this.exerciseId.toString();

    // Verifica si el ejercicio existe y asigna los valores
    if (exercises[exerciseKey]) {
      this.exerciseName = exercises[exerciseKey].name;
      this.exerciseDescription = exercises[exerciseKey].description;
    } else {
      this.exerciseName = 'Ejercicio no encontrado';
      this.exerciseDescription = '';
    }
  }
}
