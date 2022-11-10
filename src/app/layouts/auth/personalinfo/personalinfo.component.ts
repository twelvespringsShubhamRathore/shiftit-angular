import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {
  srcResult = "";
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onFileSelected(fileurl:any) {
    this.srcResult = fileurl
    console.log(this.srcResult);
  }

  submit()
  {
    this.router.navigateByUrl('/auth/verify');
  }
}
