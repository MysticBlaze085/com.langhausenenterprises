import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_MODULES } from './index';

@NgModule({
  declarations: [],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: []
})
export class SharedModule {}
