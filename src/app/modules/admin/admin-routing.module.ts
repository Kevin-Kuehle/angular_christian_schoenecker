import { AdminBiografieComponent } from './admin-biografie/admin-biografie.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminAktuellComponent } from './admin-aktuell/admin-aktuell.component';
import { AdminVitaComponent } from './admin-vita/admin-vita.component';
import { AdminGallerieComponent } from './admin-gallerie/admin-gallerie.component';
import { AdminMediaComponent } from './admin-media/admin-media.component';
import { AdminKontaktComponent } from './admin-kontakt/admin-kontakt.component';
import { AdminSocialComponent } from './admin-social/admin-social.component';

const ADMIN_ROUTES: Routes = [
  { path: 'biografie', component: AdminBiografieComponent },
  { path: 'aktuell', component: AdminAktuellComponent },
  { path: 'vita', component: AdminVitaComponent },
  { path: 'gallerie', component: AdminGallerieComponent },
  { path: 'media', component: AdminMediaComponent },
  { path: 'kontakt', component: AdminKontaktComponent },
  { path: 'social', component: AdminSocialComponent }
]


const routes: Routes = [
  { path: '', component: AdminHomeComponent, children: ADMIN_ROUTES }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
