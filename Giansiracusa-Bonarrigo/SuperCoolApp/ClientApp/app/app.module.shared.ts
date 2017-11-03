import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { MaterieComponent } from './components/materie/materie.component';
import { ListamaterieComponent } from './components/listamaterie/listamaterie.component';
import { PrenotazioneComponent } from './components/prenotazione/prenotazione.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        StudentsComponent,
        MaterieComponent,
        ListamaterieComponent,
        PrenotazioneComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'students', component: StudentsComponent },
            { path: 'materie', component: MaterieComponent },
            { path: 'materie/:id/:facolta', component: MaterieComponent },
            { path: 'listamaterie', component: ListamaterieComponent },
            { path: 'prenotazione', component: PrenotazioneComponent },
            { path: 'prenotazione/:idCouse/:id', component: PrenotazioneComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
    
})
export class AppModuleShared {
}
