import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;

  constructor(private authSvc:AuthenticationService,private router:Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
   
  }

  submit(){
    this.authSvc.login(this.form.value).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/product']);
      //navigate to login
    },err=>{
      console.log(err);
      alert('error');
    })

  }



}




