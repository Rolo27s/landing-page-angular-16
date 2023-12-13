import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

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
  tipoDni: string = 'DNI';
  mostrarDNI: boolean = false;

  usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Perez',
    tipoDni: [''],
    dni: '',
  }; // Esto es una simulacion a recoger el nombre de un end-point


  constructor( private form: FormBuilder) {
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      // dni: ['', [Validators.required, Validators.minLength(3)]], // Este atributo lo controla el hijo
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
      /* Esta linea de comando serviría para setear el nombre que viene del back. Para hacer lo mismo para varios campos se puede utilizar .patchValue
      this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo); // Cogemos el nombre y lo seteamos en el form  
      */

    // En esta parte del OnInit también se puede setear los Validators. Dependiendo del caso puede ser útil.
    console.log("Se crea o instancia el componente");
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      // dni: this.usuarioActivo.dni,
    })
    this.formularioContacto.get('nombre')?.disable(); // Deshabilitamos el input para que no se pueda modificar
    this.formularioContacto.get('apellido')?.disable(); // Deshabilitamos el input para que no se pueda modificar
    // this.formularioContacto.get('dni')?.disable(); // Deshabilitamos el input para que no se pueda modificar

    // Uso de subscribe para ir guardando toda la interaccion con el formulario
    this.formularioContacto.valueChanges.subscribe(valor => {
      console.log(valor);
    })

    // Seteo a parte el tipoDni
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.mostrarDNI = value != ''
      this.tipoDni = value
    })
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar() {
    console.log(this.formularioContacto)
  }

  // Destructor de Angular
  ngOnDestroy(): void {
      console.log("Se destruyó el componente");
  }

}
