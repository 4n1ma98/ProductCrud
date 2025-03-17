import { Component } from '@angular/core';

@Component({
  selector: 'app-homec',
  standalone: false,
  templateUrl: './homec.component.html',
  styleUrl: './homec.component.css',
})
export class HomecComponent {
  update: boolean = false;

  product: any = {};

  setUpdateData(event: any): void {
    this.update = true;
    this.product = event;
  }
}
