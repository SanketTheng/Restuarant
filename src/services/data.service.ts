import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root'
    
})

export class DataServiceComponent{

cartNumber =new BehaviorSubject(0);
}