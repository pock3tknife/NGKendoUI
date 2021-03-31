import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from '@progress/kendo-angular-popup';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { PopupAnchorDirective } from './shared/popup.anchor-target.directive';
import { ProductsService } from './shared/products.service';
import { CustomeditingrfComponent } from './grid/customeditingrf/customeditingrf.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    DropDownListModule,
    PopupModule,
    InputsModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [ProductsService],
  declarations: [
    AppComponent,
    NavContainerComponent,
    FooterComponent,
    GridComponent,
    PopupAnchorDirective,
    CustomeditingrfComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
