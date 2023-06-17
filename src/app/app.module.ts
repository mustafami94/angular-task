import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockViewComponent } from './mock-view/mock-view.component';
import { HttpClientModule } from '@angular/common/http';
import { TypeConversionPipe } from './pipes/type-conversion.pipe';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    MockViewComponent,
    TypeConversionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule

  ],
  providers: [TypeConversionPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
