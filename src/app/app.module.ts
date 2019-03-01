import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//services
import { OrdersService } from './services/orders.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { ElegirMeseroComponent } from './components/elegir-mesero/elegir-mesero.component';
import { MeseroServiceService } from './services/mesero-service.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CronometroComponent,
    ElegirMeseroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    OrdersService,
    MeseroServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
