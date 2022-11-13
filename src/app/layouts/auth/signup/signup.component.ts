import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  inputType="password";
  iconName="visibility_off";

  // form:FormGroup = new FormGroup({
  //   "Email":[]
  // })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit()
  {
    this.router.navigateByUrl('/auth/personal-info')
  }

  toggleVisibility()
  {
    if(this.iconName == "visibility_off")
    {
      this.iconName = "visibility";
      this.inputType = "text";
    }
    else{
      this.iconName = "visibility_off";
      this.inputType = "password";
    }
  }
}
