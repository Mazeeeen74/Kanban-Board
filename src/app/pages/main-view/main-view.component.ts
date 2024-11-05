import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';

import { CommonModule, DOCUMENT } from '@angular/common';
import { boards } from '../../models/board.models';
import { columns } from '../../models/columns.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    FormsModule,
    DragDropModule,
    CommonModule
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  // Adding column manually
// board : boards = new boards('todo' ,[new columns('Todo',[])])

//   columnName : string = ''; 

//   newColumn() { 
//     this.board.column.push(new columns(this.columnName, []));

    
//   }

  board: boards = new boards('todo', [
    new columns('Todo', [])
    , new columns('inProgress', []),
    new columns('Done', [])
  ])
  inputText: string = '';
  keyPress(event:KeyboardEvent , index:number) {
    if(event.key == "Enter") {
      this.AddFunction(index); 

    }
  }
  // deleting the content of the card
  // deleteContent (columnNumber :number , contentNumber : number) {
  //   // Start is the Column index
  //   // End is the content card Number
  //   this.board.column[columnNumber].task.splice(contentNumber,1);

  // }
  
  AddFunction(index: number) {
    if(this.inputText.trim()) { 
      this.board.column[index].task.push(this.inputText);
      console.log(this.inputText)
      
    }
      return this.inputText = '';
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
