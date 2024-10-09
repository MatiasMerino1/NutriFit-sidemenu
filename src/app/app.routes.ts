import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'imc-calculator',
    loadComponent: ()=>
      import('./folder/imc-calculator/imc-calculator.page').then((m) => m.ImcCalculatorPage),
  },
  {
    path: 'ejercicios-con-equipo',
    loadComponent: () => import('./folder/ejercicios-con-equipo/ejercicios-con-equipo.page').then( m => m.EjerciciosConEquipoPage)
  },
  {
    path: 'ejercicios-sin-equipo',
    loadComponent: () => import('./folder/ejercicios-sin-equipo/ejercicios-sin-equipo.page').then( m => m.EjerciciosSinEquipoPage)
  },
  {
    path: 'exercise-detail/',
    loadComponent: () => import('./folder/exercise-detail/exercise-detail.page').then( m => m.ExerciseDetailPage)
  },
];
