import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'file-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  @Input() label:string = "";
  @Input() iconName:string = "";
  srcResult = "";

  @Output() fileUrl:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected() {
    this.fileUrl.emit(this.srcResult)
  }

}
