import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AbfrageRegistenComponent } from '../register/abfrage-registen/abfrage-registen.component';



@NgModule({
  declarations: [HomeComponent,
  AbfrageRegistenComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
