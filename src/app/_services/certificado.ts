import { Injectable } from '@angular/core';
import { ICertificado } from '../Interfaces/interfaceCertificado';
import { stringify } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class Certificado {

  certificados: ICertificado[] = [];

  constructor(){}

  adicionarCertificado(certificado: ICertificado){
    this.certificados.push({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
