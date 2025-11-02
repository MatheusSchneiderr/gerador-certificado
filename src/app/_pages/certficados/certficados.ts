import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Certificado } from '../../_services/certificado';
import { ICertificado } from '../../Interfaces/interfaceCertificado';

@Component({
  selector: 'app-certficados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certficados.html',
  styleUrl: './certficados.css',
})
export class Certficados implements OnInit {
  id: string | null = null;
  Certificado: ICertificado | undefined
  constructor(private certificadoService: Certificado, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.Certificado = this.certificadoService.certificados.find(item => item.id == this.id);
      console.log(this.Certificado);
    })
  }
}
