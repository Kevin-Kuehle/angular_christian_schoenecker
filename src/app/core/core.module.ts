import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '@actor/core/services/database.service';
import { MobileHandlerService } from '@actor/core/services/mobile-handler.service';



@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class CoreModule { }
