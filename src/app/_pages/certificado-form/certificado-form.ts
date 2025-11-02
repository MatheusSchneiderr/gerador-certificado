import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICertificado } from '../../Interfaces/interfaceCertificado';
import { Certificado } from '../../_services/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm{

  constructor(private certificadoService: Certificado){}

  certificado: ICertificado = {
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
    this.certificado.atividades.push(this.atividade);
    this.atividade = "";
  }

  excluirAtividade(index: number){
    this.certificado.atividades.splice(index, 1);
  }

  subtmit(){
    if(this.formValido()){
      this.certificado.dataEmissao = this.dataAtaual();
      this.certificadoService.adicionarCertificado(this.certificado);
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
