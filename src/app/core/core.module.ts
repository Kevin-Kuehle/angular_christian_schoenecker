import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [HttpClientModule]
})
export class CoreModule { }
