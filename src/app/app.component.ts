import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { LunchDinnerComponent } from './lunch-dinner/lunch-dinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart/cart.component';
import { DataServiceComponent } from '../services/data.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgClass } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule,
    CoffeeComponent,LunchDinnerComponent,NgClass,MatBadgeModule,
    FontAwesomeModule, MatProgressSpinner, MatSidenavModule,
    MyOrdersComponent, FormsModule,CartComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'demo';
  openSidenav=false;
  public pageOpned='home';
  public numberItem:number=0;
  public numberItemList:any=[];
  public myOrdersList:any=[];

  constructor(private router:Router, public dataService:DataServiceComponent){}


  ngOnInit(): void {
    this.dataService.cartNumber.subscribe((res)=>{
      this.numberItem=res;
    })
  }

  mainClick(){
    this.openSidenav=!this.openSidenav;
  }

  openSidePage(routerValue:string){
    this.pageOpned=routerValue;
    this.openSidenav=false;
  }

  cartItem(event:any){
    this.numberItemList.push(event);
    this.numberItemList.map((item, index)=>{
      this.numberItem=index+1;
    })
    console.log(event);
  }

  openCart(){
    this.router.navigate(["cart"]);
    this.pageOpned='cart';
  }

  redirectHome(){
    this.pageOpned='home';
  }

  myOrders(event){
   this.myOrdersList.push(event);
  }

  
}
