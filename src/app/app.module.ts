import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameTileComponent } from './game-tile/game-tile.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { FaceOneComponent } from './asset-componets/face-one/face-one.component';
import { FaceTwoComponent } from './asset-componets/face-two/face-two.component';
import { FaceThreeComponent } from './asset-componets/face-three/face-three.component';

@NgModule({
  declarations: [
    AppComponent,
    GameTileComponent,
    GameBoardComponent,
    FaceOneComponent,
    FaceTwoComponent,
    FaceThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
