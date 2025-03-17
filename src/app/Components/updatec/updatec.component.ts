import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatec',
  standalone: false,
  templateUrl: './updatec.component.html',
  styleUrl: './updatec.component.css',
})
export class UpdatecComponent {
  @Output() edit = new EventEmitter<any>();
  @Input() product: any = {};

  update(): void {
    Swal.fire({
      title: 'Actualizar producto?',
      text: 'Si confirmas esta acción el producto se actualizará!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Proceso exitoso!',
          text: 'Se ha actualizado el producto correctamente!',
          icon: 'success',
        });
      }
    });
  }

  emit(): void {
    this.edit.emit();
  }
}
