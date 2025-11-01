import { Routes } from '@angular/router';
import { Certficados } from './_pages/certficados/certficados';
import { CertificadoForm } from './_pages/certificado-form/certificado-form';
import { Certificado } from './_pages/certificado/certificado';

export const routes: Routes = [
  {
    path:"",
    component:Certficados
  },
  {
    path:"certificados/novo",
    component:CertificadoForm
  },
  {
    path:"certificados/:id",
    component: Certificado
  }
];
