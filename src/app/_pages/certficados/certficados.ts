import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-certficados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certficados.html',
  styleUrl: './certficados.css',
})
export class Certficados {

}
