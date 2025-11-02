import { Injectable } from '@angular/core';
import { ICertificado } from '../Interfaces/interfaceCertificado';

@Injectable({
  providedIn: 'root'
})
export class Certificado {

  certificados: ICertificado[] = [];

  constructor(){}

  adicionarCertificado(certificado: ICertificado){
    this.certificados.push(certificado);
  }
}
