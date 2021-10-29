import { Component, OnInit,ViewChild, AfterViewInit,Renderer2,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { GameServiceService } from '../game-service.service';
import { GameTileComponent } from '../game-tile/game-tile.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit,AfterViewInit {

  @ViewChild('gameBoard', {read: ViewContainerRef}) gameBoard:ViewContainerRef;
  gameTiles: GameTileComponent [] = [];

  constructor(private renderer: Renderer2, private gameService: GameServiceService, private componentFactoryResolver: ComponentFactoryResolver ) { }

  ngOnInit(): void {
    this.gameService.currentTile.subscribe(tile => {
      console.log(tile);
    })
    this.gameService.boardChange.subscribe(tiles => {
      if(!tiles){
        return;
      }
      const ref1 = this.gameBoard.get(tiles.index1);
      const ref2 = this.gameBoard.get(tiles.index2);
      this.gameBoard.move(ref1,tiles.index2); 
      this.gameBoard.move(ref2,tiles.index1);
    });
  }

  ngAfterViewInit(): void {
    console.log(this.gameTiles.length);
    for(let i = 0; i < 64; i ++){
      const ref = this.gameBoard.createComponent(this.componentFactoryResolver.resolveComponentFactory(GameTileComponent));
      ref.instance.setIndex = i;
      ref.instance.setAsset = Math.floor(Math.random()*6);
    }

  }

  // test(i: number,j: number):void {
  //   const tile = this.tiles.get().
  //   console.log(i,j);
  // }

}
