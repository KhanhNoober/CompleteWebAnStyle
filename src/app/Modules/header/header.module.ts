import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NbButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
