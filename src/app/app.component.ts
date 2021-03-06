import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente();

  profissoes = ['Programador', 'Empresário', 'Outra'];
  profissao = 'Outra';


  submitForm(form: NgForm) {

    this.cliente.nome = form.value.nome;
    this.cliente.email = form.value.email;
    this.cliente.profissao = form.value.profissao;

    console.log('Form: ', form);
    console.log('cliente::', this.cliente);

    form.reset({profissao: ''});



  }
}
