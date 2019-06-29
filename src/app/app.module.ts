import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MakeupService} from './main/services/makeup.service';
import { HomeComponent } from './main/component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiUtil} from "./main/util/api.util";
import {AppBootstrapModule} from "./app.bootstrap.module";
import {InventoryService} from "./main/services/inventory.service";
import {FormsModule} from "@angular/forms";
import { MakeupListComponent } from './main/component/makeup-list/makeup-list.component';
import { NavigationComponent } from './main/component/navigation/navigation.component';
import { ViewMakeupComponent } from './main/component/view-makeup/view-makeup.component';
import {PaginationModule} from "ngx-bootstrap";
import { EditMakeupComponent } from './main/component/edit-makeup/edit-makeup.component';
import { AddRemoveProductCodesComponent } from './main/component/add-remove-product-codes/add-remove-product-codes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MakeupListComponent,
    NavigationComponent,
    ViewMakeupComponent,
    EditMakeupComponent,
    AddRemoveProductCodesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  providers: [ MakeupService, ApiUtil, InventoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
