import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup;

  constructor(private authSvc:AuthenticationService,private router:Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      role: new FormControl(1, Validators.required)
    });
   
  }

  submit(){
    this.authSvc.register(this.form.value).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/login']);
      
    },err=>{
      console.log(err);
      alert('error');
    })

  }



}
