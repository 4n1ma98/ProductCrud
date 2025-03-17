import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatec',
  standalone: false,
  templateUrl: './updatec.component.html',
  styleUrl: './updatec.component.css',
})
export class UpdatecComponent {
  @Output() create = new EventEmitter<any>();
  @Input() product: any = {};

  updateForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    description: new FormControl({ value: '', disabled: true }, [
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

  ngOnChanges(): void {
    this.updateForm.patchValue(this.product);
  }

  update(): void {
    if (this.updateForm.valid) {
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
          this.create.emit();

          Swal.fire({
            title: 'Proceso exitoso!',
            text: 'Se ha actualizado el producto correctamente!',
            icon: 'success',
          });
        }
      });
    } else {
      this.updateForm.markAllAsTouched();
    }
  }

  emit(): void {
    this.create.emit();
  }
}
