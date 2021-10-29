import { Component, OnInit,ElementRef,Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit, AfterViewInit {

  index: number;
  asset: number = -1;

  constructor(private gameService: GameServiceService, private _element:ElementRef,private renderer: Renderer2,private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.gameService.addTile(this);

  }
  ngAfterViewInit(){
    this.gameService.moveSubject.subscribe(move => {
      if(move?.index === this.index){
        console.log(move);
        this.renderer.addClass(this._element.nativeElement,move.move);
        setTimeout(() => {
          this.renderer.removeClass(this._element.nativeElement,move.move);
        },1000);
      }
    });
  }

  onClick():void {
    this.gameService.click(this.index);
  }
  set setIndex(index: number){
    this.index = index;
    this.ref.detectChanges();
  }

  set setAsset(asset: number){
    this.asset = asset;
    this.ref.detectChanges();
  }
}
