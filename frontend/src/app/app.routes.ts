import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/home/home-routing.module').then(m => m.HomeRoutingModule)
    },
    {
        path: 'juegos',
        loadChildren: () =>
            import('./features/juegos/juegos-routing.module').then(m => m.JuegosRoutingModule)
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }