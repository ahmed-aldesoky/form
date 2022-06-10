import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{Router} from '@angular/router';
import {NgToastService} from 'ng-angular-popup';
import {FormBuilder, FormControl,FormGroup, PatternValidator, Validators} from '@angular/forms';
import{patternValidation} from'../validaor/pattern'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private toast: NgToastService, private router:Router) { }

companyForm= this.fb.group({
  arName:['',[Validators.required,Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]],
  enName:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
  website:['',[Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
  cumericalNum:['',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10),Validators.minLength(10)]],
})

get arName(){
  return this.companyForm.get('arName')
}
get enName(){
  return this.companyForm.get('enName')
}
get website(){
  return this.companyForm.get('website')
}
get cumericalNum(){
  return this.companyForm.get('cumericalNum')
}


  ngOnInit(): void {
    
  }


@Output()submit=new EventEmitter<any>()
  submitData(){
    this.submit.emit(this.companyForm.value)
    }
  }
  


