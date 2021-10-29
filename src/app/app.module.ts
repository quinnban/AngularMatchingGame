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
import { FaceFourComponent } from './asset-componets/face-four/face-four.component';
import { FaceFiveComponent } from './asset-componets/face-five/face-five.component';
import { FaceSixComponent } from './asset-componets/face-six/face-six.component';

@NgModule({
  declarations: [
    AppComponent,
    GameTileComponent,
    GameBoardComponent,
    FaceOneComponent,
    FaceTwoComponent,
    FaceThreeComponent,
    FaceFourComponent,
    FaceFiveComponent,
    FaceSixComponent
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
