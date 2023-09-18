import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule correctamente
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // ... otros componentes
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // Corrige la importación de HttpClientModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
