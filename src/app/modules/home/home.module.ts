import { CommonModule } from '@angular/common';
import { VitaComponent } from './vita/vita.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SocialsComponent } from './socials/socials.component';
import { NewsComponent } from './news/news.component';
import { MediaViewComponent } from './media-view/media-view.component';
import { MediaComponent } from './media/media.component';
import { LightboxComponent } from './lightbox/lightbox.component';
// import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { BiografieComponent } from './biografie/biografie.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { LightboxModule } from 'primeng/lightbox';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    HomeComponent,
    BiografieComponent,
    EventsComponent,
    // GalleryComponent,
    LightboxComponent,
    MediaComponent,
    MediaViewComponent,
    NewsComponent,
    SocialsComponent,
    PersonalDataComponent,
    VitaComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    LightboxModule,
    InputTextModule,
    AccordionModule,
    TableModule
  ]
})
export class HomeModule { }
