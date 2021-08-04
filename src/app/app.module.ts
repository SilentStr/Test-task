import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { FilterPipe } from './filter.pipe';
import { DetailsComponent } from './details/details.component';
import {FormsModule} from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideBarComponent,
    FilterPipe,
    DetailsComponent,
    EditFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
