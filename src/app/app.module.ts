import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { CommonComponent } from './common/common.component';
import { CreateComponent } from './common/create/create.component';
import { ReadComponent } from './common/read/read.component';
import { UpdateComponent } from './common/update/update.component';
import { DeleteComponent } from './common/delete/delete.component';
import { GetidComponent } from './common/getid/getid.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    CommonComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    GetidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
