import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICertificado } from '../../Interfaces/interfaceCertificado';
import { CertificadoService } from '../../_services/certificadoService';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm{

  constructor(private certificadoService: CertificadoService, private route: Router){}
  @ViewChild('form')  form!: NgForm;

  certificado: ICertificado = {
    id: "",
    nome: "",
    atividades: [],
    dataEmissao: ""
  };
  atividade: string = "";

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }

  formValido(){
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade(){
    if(this.atividade.trim().length > 0){
      this.certificado.atividades.push(this.atividade);
      this.atividade = "";
    }
  }

  excluirAtividade(index: number){
    this.certificado.atividades.splice(index, 1);
  }

  subtmit(){
    if(this.formValido()){
      this.certificado.id = uuidv4();
      this.certificado.dataEmissao = this.dataAtaual();
      this.certificadoService.adicionarCertificado(this.certificado);
      this.route.navigate(['certificados', this.certificado.id]);
    }
  }

  dataAtaual(){
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}
