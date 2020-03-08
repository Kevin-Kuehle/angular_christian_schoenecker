import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BiografieComponent } from './biografie/biografie.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';

import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { VitaComponent } from './vita/vita.component';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DataViewModule } from 'primeng/dataview';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { DialogModule } from 'primeng/dialog';
import { GalleryComponent } from './gallery/gallery.component';
import { LightboxModule } from 'primeng/lightbox';
import { LightboxComponent } from './lightbox/lightbox.component';
import { MediaComponent } from './media/media.component';
import { MediaViewComponent } from './media-view/media-view.component';
import { SocialsComponent } from './socials/socials.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BiografieComponent,
    NewsComponent,
    EventsComponent,
    VitaComponent,
    PersonalDataComponent,
    GalleryComponent,
    LightboxComponent,
    MediaComponent,
    MediaViewComponent,
    SocialsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
