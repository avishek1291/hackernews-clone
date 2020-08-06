import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeRoutingModule } from './home.module.routing';
import { NewsPostEffects } from './store/effects/newspost.effects';
import { NewsPostreducers } from './store/index';
import { NewsPostFeatureKey } from './store/reducers/newspost.reducer';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    HomeRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(NewsPostFeatureKey, NewsPostreducers),
    EffectsModule.forFeature([NewsPostEffects])
  ],
  exports: [CommonModule, NgxSpinnerModule]
})
export class HomeModule { }
