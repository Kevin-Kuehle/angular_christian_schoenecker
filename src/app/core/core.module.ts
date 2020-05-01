import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@actor/shared/shared.module';



@NgModule({
  declarations: [],
  providers: [],
  imports: [
    HttpClientModule
  ],
  exports: [HttpClientModule]
})
export class CoreModule { }
