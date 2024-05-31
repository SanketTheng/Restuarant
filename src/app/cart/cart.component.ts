import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceComponent } from '../../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  @Input() cartItems;
  @Input() pageOpned;
  @Output() redirectHome= new EventEmitter<any>();
  @Output() myOrders= new EventEmitter<any>();
  public openModal:boolean=false;
  public itemCount=1;
  public orderConfirm:any;

  constructor(private dataService:DataServiceComponent, private router:Router){}

  ngOnInit(): void {
  this.cartItems.map((data)=>{
    data.originalPrice=500;
    data.newPrice=500;
    data.srNoOld=1;
    data.srNoNew=1;
  })
  }

  removeFromCart(item){
    item['addedCart']=false;
    this.cartItems.splice(item,1);
    this.dataService.cartNumber.next(this.cartItems.length);
  }

  confirmModal(item){
    this.openModal=true;
    this.orderConfirm=item;
  }


  closeModal(){
    this.openModal=false;
  }
  itemAdd(item,count){
    this.itemCount=count+1;
    item.srNoNew=item.srNoOld+count;
    item.newPrice=((item.originalPrice*(this.itemCount)));
  }

  itemRemove(item,count){
    this.itemCount=count-1;
    item.srNoNew=count-item.srNoOld;
    item.newPrice=((item.originalPrice*(this.itemCount)));
  }

  orderConfimartion(){
    this.openModal=false;
    console.log(this.orderConfirm);
    this.cartItems.splice(this.orderConfirm,1);
    this.dataService.cartNumber.next(this.cartItems.length);
    setTimeout(()=>{this.redirectHome.emit()},1000);
    this.myOrders.emit(this.orderConfirm);
  }

}
