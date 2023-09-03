import { NgModule, inject } from '@angular/core';
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
import { TokenService } from './services/token.service';
import { GalerieComponent } from './galerie/galerie/galerie.component';

const routes: Routes = [

  { path: '', component: AccueilComponent , title: 'Accueil'},
  { path: 'nft/:id', component: NftDetailsComponent , title: 'Détails du NFT'},
  { path: 'login', component: LogComponent , title: 'Connexion / Incription'},
  { path: 'myAccount', component: MyAccountComponent, canActivate: [()=>inject(TokenService).isUserConnectedGuard()] , title: 'Mon compte'},
  { path: 'galerie', component: GalerieComponent , title: 'Gallerie'},
  { path: 'edit/nft/:id', component: EditNftComponent , title: 'Edition d\'un NFT'},
  { path: 'edit/profil', component: EditProfilComponent , title: 'Modifier mes informations'},
  { path: 'new/collection', component: AddCollectionComponent , title: 'Créer ma nouvelle collection'},
  { path: 'new/nft', component: AddNftComponent , title: 'Importer un nouvel NFT'},
  { path: 'admin/users', component: AdminUserComponent, canActivate: [()=>inject(TokenService).isUserAdminGuard()] , title: 'Admin User'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
