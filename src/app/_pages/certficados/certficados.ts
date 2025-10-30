import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";

@Component({
  selector: 'app-certficados',
  imports: [ItemCertificado],
  templateUrl: './certficados.html',
  styleUrl: './certficados.css',
})
export class Certficados {

}
