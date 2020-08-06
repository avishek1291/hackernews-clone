import { Routes, RouterModule} from '@angular/router';
import { HomeContainerComponent } from './shell/home.container.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/homeComponent/home.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';
import { LoaderComponent } from './components/loader/loader.component';

const HomeRoutes: Routes = [
    {path: '', component: HomeContainerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes), CommonModule],
    declarations: [HomeComponent, HomeContainerComponent, ChartComponent, LoaderComponent],
    exports: [RouterModule]
  })
  export class HomeRoutingModule {}
