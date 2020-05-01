import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { LightboxModule } from 'primeng/lightbox';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';


const ModuleObject: any = [
  ReactiveFormsModule,
  FormsModule,
  EditorModule,
  VirtualScrollerModule,
  DataViewModule,
  DialogModule,
  LightboxModule,
  InputTextModule,
  AccordionModule,
  TableModule,
]


@NgModule({
  declarations: [],
  imports: [...ModuleObject],
  exports: [...ModuleObject]
})
export class SharedModule { }
