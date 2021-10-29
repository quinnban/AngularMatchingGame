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
  }

  ngAfterViewInit(): void {
    console.log(this.gameTiles.length);
    for(let i = 0; i < 80; i ++){
      const ref = this.gameBoard.createComponent(this.componentFactoryResolver.resolveComponentFactory(GameTileComponent));
      ref.instance.setIndex = i;
    }
  }

  // test(i: number,j: number):void {
  //   const tile = this.tiles.get().
  //   console.log(i,j);
  // }

}
