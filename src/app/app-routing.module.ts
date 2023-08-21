import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { NftDetailsComponent } from './nft-details/nft-details/nft-details.component';
import { LogComponent } from './log/log/log.component';

const routes: Routes = [

  { path: '', component: AccueilComponent},
  { path: 'nft/:id', component: NftDetailsComponent},
  { path: 'login', component: LogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
