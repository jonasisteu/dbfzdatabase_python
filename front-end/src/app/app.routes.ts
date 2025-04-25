import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'characters', component: HomeComponent },
    { path: 'characters/:reference', component: CharacterComponent },
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
