import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    MyDoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
