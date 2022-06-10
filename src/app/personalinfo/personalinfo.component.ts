import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {NgToastService} from 'ng-angular-popup';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms'
import { passValidation } from '../validaor/PasswordValidator';
import { EnrollService } from '../enroll.service';





@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  constructor(private fb:FormBuilder,private toast: NgToastService, private router:Router, private enrollService:EnrollService) { }

  personalInfoForm= this.fb.group({
    name:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
    pass:['',[Validators.required]],
    confirmPass:['',[Validators.required]],

  },
  {validators:[passValidation]})

  get name(){
    return this.personalInfoForm.get('name')
  }
  get email(){
    return this.personalInfoForm.get('email')
  }
  get phone(){
    return this.personalInfoForm.get('phone')
  }
  get pass(){
    return this.personalInfoForm.get('pass')
  }
  get confirmPass(){
    return this.personalInfoForm.get('confirmPass')
  }
  
  ngOnInit(): void {  
  }
  
step=0;
signupData:any
next(data:any){
  console.log(data);
  this.signupData=data
  this.step++;

  

}
submitData(){

  let myData=Object.assign(this.personalInfoForm.value, this.signupData)
  

  console.log(this.personalInfoForm);    
    this.enrollService.enroll(myData).subscribe(
      response=>
      {
        console.log("success");
      this.toast.success({detail:"success Message", summary:"form are submitted", duration:5000});
      this.router.navigate(['/homePage'])
        
      },
      error=>
      {
        console.log(error);
      this.toast.error({detail:"faild Message", summary:"form aren't submitted", duration:5000});

        
      }
    )
    }


}
