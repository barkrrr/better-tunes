import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { HomepageCardComponent } from './components/homepage-card/homepage-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';

const routes: Routes = [
  { path: '',  component: HomePageComponent },
  { path: 'track/:id', component: PlayerPageComponent },
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    PlayerPageComponent,
    HomepageCardComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
