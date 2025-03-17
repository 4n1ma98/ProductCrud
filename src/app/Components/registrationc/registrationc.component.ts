import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrationc',
  standalone: false,
  templateUrl: './registrationc.component.html',
  styleUrl: './registrationc.component.css',
})
export class RegistrationcComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
      Validators.min(0),
      Validators.max(10000000),
    ]),
    stock: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
      Validators.min(0),
      Validators.max(1000),
    ]),
  });

  register(): void {
    if (this.registerForm.valid) {
      this.registerForm.reset();

      Swal.fire({
        title: 'Proceso exitoso!',
        text: 'Se ha registrado el producto correctamente!',
        icon: 'success',
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
