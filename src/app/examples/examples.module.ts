import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ModalManagerExampleComponent } from './modal-manager-example/modal-manager-example.component';
import { ModalComponent } from './modal-manager-example/modal/modal.component';

@NgModule({
  declarations: [
    ModalManagerExampleComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ModalManagerExampleComponent
  ]
})
export class ExamplesModule { }
