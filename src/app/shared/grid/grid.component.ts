import { Component, Input, OnInit } from '@angular/core';
import { gridColumn,gridRow } from '../grid-data-model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() columns: string[] = []
  @Input() data: gridRow[] = []
  @Input() IsActionEnable: boolean = false;


  constructor() {
   }

  ngOnInit(): void {
    console.log(this.data)
  }

}
