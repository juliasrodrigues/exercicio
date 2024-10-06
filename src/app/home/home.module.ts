import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PokeComponent } from '../poke/poke.component';
import { CompgptComponent } from '../compgpt/compgpt.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PokeComponent,
    CompgptComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
