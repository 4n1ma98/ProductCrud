import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listc',
  standalone: false,
  templateUrl: './listc.component.html',
  styleUrl: './listc.component.css',
})
export class ListcComponent implements OnInit {
  @Output() edit = new EventEmitter<any>();

  currentPage = 1;
  itemsPerPage = 5;
  totalPages: number[] = [];
  product: any = {};
  products: Array<any> = [
    {
      id: 1,
      name: 'Manzana01',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 2,
      name: 'Manzana02',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 3,
      name: 'Manzana03',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 4,
      name: 'Manzana04',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 5,
      name: 'Manzana05',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 6,
      name: 'Manzana06',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 7,
      name: 'Manzana07',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 8,
      name: 'Manzana08',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 9,
      name: 'Manzana09',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 10,
      name: 'Manzana10',
      description: 'description',
      price: 2000,
      stock: 100,
    },
    {
      id: 11,
      name: 'Manzana11',
      description: 'description',
      price: 2000,
      stock: 100,
    },
  ];
  originalList: Array<any> = this.products;

  get newProducts() {
    const inicio = (this.currentPage - 1) * this.itemsPerPage;
    const fin = inicio + this.itemsPerPage;
    return this.products.slice(inicio, fin);
  }

  ngOnInit() {
    this.calculatePages();
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

  delete(): void {
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
        Swal.fire({
          title: 'Proceso exitoso!',
          text: 'Se ha eliminado el producto correctamente!',
          icon: 'success',
        });
      }
    });
  }
}
