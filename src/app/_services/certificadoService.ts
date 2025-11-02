import { Injectable } from '@angular/core';
import { ICertificado } from '../Interfaces/interfaceCertificado';
import { stringify } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: ICertificado[] = [];

  constructor(){}

  adicionarCertificado(certificado: ICertificado){
    this.certificados.unshift({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
