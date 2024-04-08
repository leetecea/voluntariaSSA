import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
    HomeComponent, VagasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voluntáriaSSA';
}
