import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent },
  { path: 'player', component: PlayerPageComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    PlayerPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }