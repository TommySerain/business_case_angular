import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { NftDetailsComponent } from './nft-details/nft-details/nft-details.component';
import { LogComponent } from './log/log/log.component';
import { MyAccountComponent } from './my-account/my-account/my-account.component';
import { EditNftComponent } from './my-account/edit-nft/edit-nft.component';
import { AddCollectionComponent } from './my-account/add-collection/add-collection.component';
import { AddNftComponent } from './my-account/add-nft/add-nft.component';
import { EditProfilComponent } from './my-account/edit-profil/edit-profil.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';

const routes: Routes = [

  { path: '', component: AccueilComponent},
  { path: 'nft/:id', component: NftDetailsComponent},
  { path: 'login', component: LogComponent},
  { path: 'myAccount', component: MyAccountComponent},
  { path: 'edit/nft/:id', component: EditNftComponent},
  { path: 'edit/profil', component: EditProfilComponent},
  { path: 'new/collection', component: AddCollectionComponent},
  { path: 'new/nft', component: AddNftComponent},
  { path: 'admin/users', component: AdminUserComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
