import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-manager-example',
  templateUrl: './modal-manager-example.component.html',
  styleUrls: ['./modal-manager-example.component.scss']
})
export class ModalManagerExampleComponent {
  isModalOpen = false;
  modalId = '';

  openModal(id: string) {
    this.isModalOpen = true;
    this.modalId = id;
  }
}
