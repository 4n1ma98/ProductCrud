import { Component, ViewChild } from '@angular/core';
import { ListcComponent } from '../listc/listc.component';

@Component({
  selector: 'app-homec',
  standalone: false,
  templateUrl: './homec.component.html',
  styleUrl: './homec.component.css',
})
export class HomecComponent {
  @ViewChild(ListcComponent) listc!: ListcComponent;
  update: boolean = false;
  product: any = {};

  setUpdateData(event: any): void {
    this.update = true;
    this.product = event;
  }

  updateProductList(): void {
    this.listc.read();
  }
}
