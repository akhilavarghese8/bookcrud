import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';




const routes: Routes = [
  {
    path: '', component: BookComponent, children: [

      {

        path: "",

        redirectTo: 'list',

        pathMatch: "full"

      },

      {

        path: "list",

        component: BooklistComponent,

      },
      {

        path: "create",

        component: BookcreateComponent,

      },
      {
        path:"edit/:id",
        component: BookcreateComponent,
      },
      {
        path:"delete/:id",
        component: BooklistComponent,
      },
      { path: '**',pathMatch:"full",
      component:NotfoundcomponentComponent
      } ,



    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
