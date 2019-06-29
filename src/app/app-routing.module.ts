import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./main/component/home/home.component";
import {MakeupListComponent} from "./main/component/makeup-list/makeup-list.component";
import {ViewMakeupComponent} from "./main/component/view-makeup/view-makeup.component";
import {EditMakeupComponent} from "./main/component/edit-makeup/edit-makeup.component";
import {AddRemoveProductCodesComponent} from "./main/component/add-remove-product-codes/add-remove-product-codes.component";

const routes: Routes = [
  { path: '', redirectTo: 'create-makeup', pathMatch: 'full' },
  { path: 'create-makeup', component: HomeComponent },
  { path: 'makeup-list', component: MakeupListComponent },
  { path: 'makeup-list/view/:id', component: ViewMakeupComponent },
  { path: 'makeup-list/edit/:id', component: EditMakeupComponent },
  { path: 'makeup-list/product-codes/:id', component: AddRemoveProductCodesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
