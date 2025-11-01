import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { BaseUi } from "./_components/base-ui/base-ui";

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibenavbar: boolean = false;
}

