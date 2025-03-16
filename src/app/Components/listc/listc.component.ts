import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listc',
  standalone: false,
  templateUrl: './listc.component.html',
  styleUrl: './listc.component.css',
})
export class ListcComponent {
  @Output() update = new EventEmitter<any>();

  emit(): void {
    this.update.emit();
  }
}
