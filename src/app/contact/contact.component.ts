import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Parte para el form tipo plantilla
  public usuario: any = {
    nombre: '',
    email: ''
  }

  enviarP() {
    console.log(this.usuario);
  }

  // Parte para el form tipo reactivo
  formularioContacto: FormGroup

  constructor( private form: FormBuilder) {
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar() {
    console.log(this.formularioContacto)
  }

}
