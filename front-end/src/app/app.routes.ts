import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { characterResolver } from './services/resolvers/character.resolver';

export const routes: Routes = [
    { path: 'characters', component: HomeComponent },
    {
        path: 'characters/:reference',
        resolve: {
            character: characterResolver
        },
        component: CharacterComponent
    },
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
