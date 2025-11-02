import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificadoService';
import { ICertificado } from '../../Interfaces/interfaceCertificado';

@Component({
  selector: 'app-certficados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certficados.html',
  styleUrl: './certficados.css',
})
export class Certficados implements OnInit {

  certificados: ICertificado[] = [];

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}
