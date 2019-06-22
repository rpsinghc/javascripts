import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppCrisisComponent } from "./app.crisis.component";

const appRoutes: Routes = [
  { path: 'crisis-center', component: AppCrisisComponent },
  {  path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,AppCrisisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
