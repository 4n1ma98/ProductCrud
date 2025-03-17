import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-listc',
  standalone: false,
  templateUrl: './listc.component.html',
  styleUrl: './listc.component.css',
})
export class ListcComponent implements OnInit {
  @Output() edit = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<any>();

  currentPage = 1;
  itemsPerPage = 5;
  totalPages: number[] = [];
  product: any = {};
  products: Array<any> = [];
  originalList: Array<any> = [];

  get newProducts() {
    const inicio = (this.currentPage - 1) * this.itemsPerPage;
    const fin = inicio + this.itemsPerPage;
    return this.products.slice(inicio, fin);
  }
  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.service.readProducts().subscribe((products) => {
      this.products = products.additionalData;
      this.originalList = this.products;
      this.calculatePages();
    });
  }

  calculatePages() {
    const total = Math.ceil(this.products.length / this.itemsPerPage);
    this.totalPages = Array.from({ length: total }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  getProduct(product: any): void {
    this.product = product;
  }

  searchProduct(event: any): void {
    this.products = this.originalList.filter((x) =>
      x.name.toUpperCase().includes(event.target.value.toUpperCase())
    );

    this.calculatePages();
  }

  emit(product: any): void {
    this.getProduct(product);
    this.edit.emit(this.product);
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Eliminar producto?',
      text: 'Si confirmas esta acción el producto se eliminará!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProduct(id).subscribe({
          next: (res: any[]) => {
            this.deleted.emit();

            Swal.fire({
              title: 'Proceso exitoso!',
              text: 'Se ha eliminado el producto correctamente!',
              icon: 'success',
            });
          },
          error: (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error al consumir el servicio',
            });
          },
          complete: () => {},
        });
      }
    });
  }
}
