import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'modal-manager',
  templateUrl: './modal-manager.component.html',
  styleUrls: ['./modal-manager.component.scss']
})
export class ModalManagerComponent {
  @Input() isOpen = false;
  @Input() maxWidth = '600px';
  
  @Output() isOpenChange = new EventEmitter<boolean>();

  close() {
    this.isOpenChange.emit(false);
  }
}
