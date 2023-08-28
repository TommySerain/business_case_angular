import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { NftDetailsComponent } from './nft-details/nft-details/nft-details.component';
import { LogComponent } from './log/log/log.component';
import { MyAccountComponent } from './my-account/my-account/my-account.component';
import { EditNftComponent } from './my-account/edit-nft/edit-nft.component';

const routes: Routes = [

  { path: '', component: AccueilComponent},
  { path: 'nft/:id', component: NftDetailsComponent},
  { path: 'login', component: LogComponent},
  { path: 'myAccount', component: MyAccountComponent},
  { path: 'edit/nft/:id', component: EditNftComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
