import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelFormsComponent } from './component/panel-forms/panel-forms.component';
import { WeatherComponent } from './component/weather/weather.component';
import { weatherGuard } from './service/weather.guard';

const routes: Routes = [
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  {path: 'panel', component:PanelFormsComponent, pathMatch: 'full'},
  {path: 'weather', component:WeatherComponent, pathMatch:'full', canActivate: [weatherGuard]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
