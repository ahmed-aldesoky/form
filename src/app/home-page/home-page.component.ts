import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userData:UserDataService, private activatedroute:ActivatedRoute ) { }
  name:any;
userList:any;
  ngOnInit(): void {
    // this.name=this.activatedroute.snapshot.paramMap.get("name")
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get("name")
    })
    

  }

}
