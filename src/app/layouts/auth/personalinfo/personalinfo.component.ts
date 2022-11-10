import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {
  inputType="password";
  iconName="add_circle"
  srcResult = "";

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(fileurl:any) {
    this.srcResult = fileurl
    console.log(this.srcResult);
  }

  submit()
  {

  }
}
