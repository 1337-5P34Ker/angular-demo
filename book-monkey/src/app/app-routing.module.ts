import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [
    {
    path: '',
    component: HomeComponent, pathMatch: 'full'
    },
    {
        path: 'books',
        component: BookListComponent, pathMatch: 'full'
    },{
      path: 'book/:id',
      component: BookComponent, pathMatch: 'full'
    }    
    ,{
      path: '**',
      component: NotFoundComponent, pathMatch: 'full'
    }           
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
