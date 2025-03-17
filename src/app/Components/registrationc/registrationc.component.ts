import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrationc',
  standalone: false,
  templateUrl: './registrationc.component.html',
  styleUrl: './registrationc.component.css',
})
export class RegistrationcComponent {
  register(): void {
    Swal.fire({
      title: 'Proceso exitoso!',
      text: 'Se ha registrado el producto correctamente!',
      icon: 'success',
    });
  }
}
