import { ComponentRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameTileComponent } from './game-tile/game-tile.component';
import { BoardChange } from './models/boardChange.model';
import { Position } from './models/position.model';
import { TileMove } from './models/tileMove.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private gameBoard: GameTileComponent[] = [];
  boardChange: BehaviorSubject<BoardChange> = new BehaviorSubject(null);
  moveSubject: BehaviorSubject<TileMove> = new BehaviorSubject(null);
  currentTile:BehaviorSubject<number> = new BehaviorSubject(null);
  private firstTile:number = -1;
  private secondTile:number = -1;

  constructor() {

   }

   private moveTiles(index1: number, index2: number): void{
     this.gameBoard[index1] = this.gameBoard.splice(index2,1,this.gameBoard[index1])[0];
     setTimeout(() => {
      this.boardChange.next({index1:index1,index2:index2});
    },1000);
   }

   addTile(tile: GameTileComponent): void{
     this.gameBoard.push(tile);
   }
   click(index:number){
    if(this.secondTile === -1 && this.firstTile !== -1){
      this.secondTile = index;
      const pos1 = this.calculatePosistion(this.firstTile);
      const pos2 = this.calculatePosistion(this.secondTile);
      console.log(pos1,pos2);
      if(this.moveIsValid(pos1,pos2)){
         this.pickAnimation(pos1,pos2,this.firstTile);
         this.pickAnimation(pos2,pos1,this.secondTile);
         this.moveTiles(this.firstTile,this.secondTile);
      }
      this.clearTiles()
      return;
    }
     if(this.firstTile === -1){
       this.firstTile = index;
     }

     this.currentTile.next(index);
   }

   private pickAnimation(pos1: Position, pos2: Position, index:number): void {
     let move = ''
    if(pos1.x < pos2.x){
      move='moveLeft';
    }
    if(pos1.x > pos2.x){
      move='moveRight';
    }
    if(pos1.y < pos2.y){
      move= 'moveDown'
    }
    if(pos1.y > pos2.y){
      move= 'moveUp'
    }
    this.moveSubject.next({index:index,move:move});
   }

   private calculatePosistion(index: number):Position{
     return {
      x: index % 8,
      y: Math.floor(index / 8)
     } as Position
   }
   private moveIsValid(pos1: Position, pos2: Position): boolean{


    if(pos1.x+1 === pos2.x && pos1.y+1 === pos2.y ){
      return true;
    }
    if(pos1.x -1 === pos2.x && pos1.y+1 === pos2.y){
      return true;
    }
    if(pos1.x+1 === pos2.x && pos1.y-1 === pos2.y ){
      return true;
    }
    if(pos1.x -1 === pos2.x && pos1.y-1 === pos2.y){
      return true;
    }

    if(pos1.x+1 === pos2.x && pos1.y === pos2.y ){
      return true;
    }
    if(pos1.x -1 === pos2.x && pos1.y === pos2.y){
      return true;
    }

    if(pos1.y+1 === pos2.y && pos1.x=== pos2.x){
      return true;
    }
    if(pos1.y -1 === pos2.y && pos1.x === pos2.x){
      return true;
    }




    const move = "invalidMove";
    this.moveSubject.next({index:this.firstTile,move:move});
    this.moveSubject.next({index:this.secondTile,move:move});
    return false;

   }
   private clearTiles(){
     this.firstTile = -1;
     this.secondTile = -1;
   }

}
