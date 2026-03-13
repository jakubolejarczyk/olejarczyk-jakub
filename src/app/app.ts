import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [HeaderComponent, MainComponent, FooterComponent],
})
export class App {}
