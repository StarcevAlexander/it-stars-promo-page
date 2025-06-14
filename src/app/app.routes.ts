import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'programs',
    loadComponent: () => import('./programs/programs-list/programs.component').then(c => c.ProgramsComponent)
  },
  {
    path: 'programs/:id',
    loadComponent: () => import('./programs/program-card/program-card.component').then(m => m.ProgramCardComponent)
  },
  {
    path: 'classes',
    loadComponent: () => import('./classes/classes.component').then(c => c.ClassesComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pricing/pricing.component').then(c => c.PricingComponent)
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./testimonials/testimonials.component').then(c => c.TestimonialsComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.component').then(c => c.NewsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
