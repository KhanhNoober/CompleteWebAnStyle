import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NbCardModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NbCardModule,
    NbUserModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
