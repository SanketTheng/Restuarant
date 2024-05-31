import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  @Output() cartItem= new EventEmitter<any>();
  addedCart:boolean=false;
  categoryList:any=[
    {
    title:'Pizza',
    url:'../../assets/images/pizza.jpg'
    },
    {
      title:'Burger',
      url:'../../assets/images/burger.jpeg'
    },
    {
      title:'Biryani',
      url:'../../assets/images/biryani-head.png'
    },
    {
      title:'Chinese',
      url:'../../assets/images/chinese.png'
    },
    {
      title:'South Indian',
      url:'../../assets/images/south.png'
    },
    {
      title:'Rolls',
      url:'../../assets/images/rolls.png'
    }
];

  topRestuarants:any=[
    {
      restuarantName:'Reddys Biryani Zone',
      rating:5,
      timeToDeliver:'15-20',
      url:'../../assets/toprestuarant/biryani.png',
      address:'Mughlai Road, Baner'
    },
    {
      restuarantName:'Thali House',
      rating:3,
      timeToDeliver:'30-45',
      url:'../../assets/toprestuarant/thalihouse.png',
      address:'s1-s3 Street, Hinjewadi'
    },
    {
      restuarantName:'Ghar Ka Khana',
      rating:5,
      timeToDeliver:'11-13',
      url:'../../assets/toprestuarant/gharkhana.png',
      address:'Punawale'
    }
    ,{
      restuarantName:'Radha Krishna Restuarant',
      rating:4,
      timeToDeliver:'15-20',
      url:'../../assets/toprestuarant/radhakrishna.png',
      address:'COEP Road, Shivaji Nagar'
    },
    {
      restuarantName:'Purana Pure Veg',
      rating:2,
      timeToDeliver:'5-6',
      url:'../../assets/toprestuarant/purana.png',
      address:'Mughlai Road, Wakad'
    },
    {
      restuarantName:'Oye Kiddan',
      rating:4,
      timeToDeliver:'30-45',
      url:'../../assets/toprestuarant/kiddan.png',
      address:'Modhi, Chikhli'
    },
    {
      restuarantName:'Panjabi Panner',
      rating:4,
      timeToDeliver:'15-20',
      url:'../../assets/toprestuarant/panner.png',
      address:'Nashik Phata, Vallabhnagar'
    }
  ]

  ngOnInit(): void {
    this.topRestuarants.map((data)=>{
      data.addedCart=false;
    })
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 300), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 300), behavior: 'smooth' });
  }

  addToCart(item: string) {
    this.cartItem.emit(item);
    item['addedCart']=true;
  }
}

