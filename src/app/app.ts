import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certficados } from "./_pages/certficados/certficados";
import { CertificadoForm } from "./_pages/certificado-form/certificado-form";
import { Certificado } from "./_pages/certificado/certificado";


@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibenavbar: boolean = false;
}
12
