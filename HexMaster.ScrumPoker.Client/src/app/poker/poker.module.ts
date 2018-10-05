import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { PbiComponent } from './pbi/pbi.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedcomponentsModule } from '../sharedcomponents/sharedcomponents.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ScrollbarModule,
    ReactiveFormsModule,
    SharedcomponentsModule
  ],
  declarations: [HomeComponent, JoinComponent, CreateComponent, PbiComponent]
})
export class PokerModule {}
