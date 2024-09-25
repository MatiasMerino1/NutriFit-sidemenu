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
];
