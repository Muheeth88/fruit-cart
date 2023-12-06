import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }

  fruitList = new BehaviorSubject([
    {id: 1, fruitName: "Apple", price: 200, quantity: 1},
    {id: 2, fruitName: "Banana", price: 80, quantity: 1},
    {id: 3, fruitName: "Orange", price: 160, quantity: 1}
  ])
  getAllFruitList = this.fruitList.asObservable();

  selectedFruitList = new BehaviorSubject(<any>[]);
  getSelectedFruitList = this.selectedFruitList.asObservable();

  setFruitList(fruitList: any[]){
    this.selectedFruitList.next(fruitList)
  }
}
