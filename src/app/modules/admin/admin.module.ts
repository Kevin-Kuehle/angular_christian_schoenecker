import { NgModule } from '@angular/core';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminBiografieComponent } from './admin-biografie/admin-biografie.component';
import { AdminAktuellComponent } from './admin-aktuell/admin-aktuell.component';
import { AdminVitaComponent } from './admin-vita/admin-vita.component';
import { AdminGallerieComponent } from './admin-gallerie/admin-gallerie.component';
import { AdminMediaComponent } from './admin-media/admin-media.component';
import { AdminKontaktComponent } from './admin-kontakt/admin-kontakt.component';
import { AdminSocialComponent } from './admin-social/admin-social.component';
import { SharedModule } from '@actor/shared/shared.module';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminBiografieComponent,
    AdminAktuellComponent,
    AdminVitaComponent,
    AdminGallerieComponent,
    AdminMediaComponent,
    AdminKontaktComponent,
    AdminSocialComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule
  ]
})
export class AdminModule { }
