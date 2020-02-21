import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre: '', correo: '', edad: '', password: '', passwordConfirmacion: ''
  };

  constructor() { }

  ngOnInit() {
  }

  validarPasswordsIguales(): boolean {
    if (this.usuario.password === this.usuario.passwordConfirmacion) {
      return false;
    } else {
      return true;
    }
  }

}
