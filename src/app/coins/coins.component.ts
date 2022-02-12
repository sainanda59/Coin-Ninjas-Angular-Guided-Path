import { Component, OnInit } from '@angular/core';
import { CoinDataService } from '../coin-data.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit {
  searchData:any;
  search:FormGroup;
  id:string;
  found:boolean;

  data:any;
  curr:string= 'USD';
  isUSD:boolean=true;


  constructor(private coinService: CoinDataService){}

  ngOnInit(): void {
    this.search = new FormGroup({
        id:new FormControl('')
      })
    
      this.coinService.getAllData(this.curr).
      subscribe(
        (response)=>{
          this.data = response;
          console.log(response);
        },
        (error)=>{console.log(error)}
      )
  }
  
    onSearch(form: FormGroup){
    this.found=false;
    this.coinService.getSingleData(form.value.id,this.curr).
      subscribe(
        (response)=>{
          this.searchData = response;
          console.log(response);
          this.found=true;
        },
        (error)=>{console.log(error)}
      )
  }

  
  onChange(){

    if(this.isUSD){
    this.curr = 'INR';
    this.isUSD=false;
    }
    else{
    this.curr = 'USD';
    this.isUSD=true;
    }
    
    this.coinService.getAllData(this.curr).
      subscribe(
        (response)=>{
          this.data = response;
          console.log(response);
        },
        (error)=>{console.log(error)}
      )
  }

}
