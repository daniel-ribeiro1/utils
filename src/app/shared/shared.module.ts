import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalManagerComponent } from './components/modal-manager/modal-manager.component';

@NgModule({
  declarations: [
    ModalManagerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalManagerComponent
  ]
})
export class SharedModule { }
