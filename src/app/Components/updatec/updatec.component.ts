import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-updatec',
  standalone: false,
  templateUrl: './updatec.component.html',
  styleUrl: './updatec.component.css',
})
export class UpdatecComponent {
  @Output() update = new EventEmitter<any>();

  emit(): void {
    this.update.emit();
  }
}
