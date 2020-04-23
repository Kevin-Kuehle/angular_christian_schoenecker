import { AdminModule } from './../modules/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule
  ],
  exports: [HttpClientModule, ReactiveFormsModule, CommonModule, FormsModule]
})
export class CoreModule { }
