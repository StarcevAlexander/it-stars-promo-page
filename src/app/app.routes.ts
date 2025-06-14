import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },

  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'programs',
    loadComponent: () => import('./programs/programs.component').then(c => c.ProgramsComponent)
  },
  {
    path: 'programs/:id',
    loadComponent: () => import('./programs/program-card/program-card.component').then(m => m.ProgramCardComponent)
  },
  {
    path: 'schedule',
    loadComponent: () => import('./schedule/schedule.component').then(c => c.ScheduleComponent)
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
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];
