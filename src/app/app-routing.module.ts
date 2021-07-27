import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        //Especificamos las rutas hijas
        path:'home', loadChildren: () => import('./@public/pages/home/home.module')
            .then(m => m.HomeModule),
    },
    {
        path:'contact', loadChildren: () => import('./@public/pages/contact/contact.module')
            .then(m => m.ContactModule)
    },
    {        
        path:'', redirectTo: 'home', pathMatch:'full'
    },
    {
        //Path Comodin - Para paginas no encontradas
        path:'**', redirectTo:'home', pathMatch:'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes, {        
        useHash: true,
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }