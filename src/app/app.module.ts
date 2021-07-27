import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './@admin/pages/admin.module';
import { PublicModule } from './@public/pages/public.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,    
    AdminModule,
    PublicModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
