import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { NavBarComponent } from './components/layouts/navBar/navBar.component';
import { PagenotfoundComponent } from './components/layouts/Pagenotfound/Pagenotfound.component';
import { TestComponent } from './components/test/test.component';
import { DashboardComponent } from './components/layouts/dashboard/dashboard.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    AboutComponent,
    FooterComponent,
    PagenotfoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
