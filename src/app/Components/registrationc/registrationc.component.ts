import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-registrationc',
  standalone: false,
  templateUrl: './registrationc.component.html',
  styleUrl: './registrationc.component.css',
})
export class RegistrationcComponent {
  @Output() registered = new EventEmitter<any>();

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

  constructor(private service: ServiceService) {}

  register(): void {
    if (this.registerForm.valid) {
      const newProduct = {
        name: this.registerForm.get('name')?.value,
        description: this.registerForm.get('description')?.value,
        price: this.registerForm.get('price')?.value,
        stock: this.registerForm.get('stock')?.value,
      };

      this.service.createProduct(newProduct).subscribe({
        next: (res: any[]) => {
          this.registered.emit();

          this.registerForm.reset();

          Swal.fire({
            title: 'Proceso exitoso!',
            text: 'Se ha registrado el producto correctamente!',
            icon: 'success',
          });
        },
        error: (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al consumir el servicio.',
          });
        },
        complete: () => {},
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
