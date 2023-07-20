import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // @Output()
  // public onDeleteId: EventEmitter<number> = new EventEmitter();
  //onDeleteId = new EventEmitter<number>();
  @Output()
  onDeleteId = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    //TODO: Emitir el ID del personaje
    // console.log(index);
    this.onDeleteId.emit(id);
  }
}
