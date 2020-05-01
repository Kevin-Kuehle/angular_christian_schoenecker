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


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminBiografieComponent,
    AdminAktuellComponent,
    AdminVitaComponent,
    AdminGallerieComponent,
    AdminMediaComponent,
    AdminKontaktComponent,
    AdminSocialComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
