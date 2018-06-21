import {  Routes } from '@angular/router'
import { EditNewComponent } from './edit-new.component';
import { EditUserComponent } from './edit-user.component';
import { DetailComponent } from './detail.component';

export const user_routes: Routes =[
    {path: 'nuevo', component: EditNewComponent},
    {path: 'editar', component: EditUserComponent},
    {path: 'detail', component: DetailComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'editar'}
]