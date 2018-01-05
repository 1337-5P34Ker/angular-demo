
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [
    {
        path: 'books',
        children: [
            { path: '', component: BookListComponent, pathMatch: 'full', data: { type: 'items.appointment', action: 'show' } }
        ]
    }   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
