import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SharedModule } from '../_modules/shared.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';



@NgModule({
  declarations: [
    SectionHeaderComponent, NavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BreadcrumbModule,
  ],
  exports: [SectionHeaderComponent, NavComponent]
})
export class CoreModule { }
