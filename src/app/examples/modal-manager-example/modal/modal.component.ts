import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title = '';

  ngOnInit() {
    console.log('Iniciando o modal', this.title);
  }

  ngOnDestroy() {
    console.log('Destruíndo o modal', this.title);
  }
}
