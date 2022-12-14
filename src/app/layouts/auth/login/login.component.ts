import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputType="password";
  iconName="visibility_off"

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit()
  {
    this.router.navigateByUrl("/dashboard");
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
