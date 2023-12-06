import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  selectedFruitList:any[] = []
  total = 0;

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.getSelectedFruitList.subscribe(fruitList => this.selectedFruitList = fruitList)
    this.calculateTotal()
  }

  onPlusClick(fruit: any) {
    fruit.quantity = fruit.quantity + 1
    this.calculateTotal()
  }

  onMinusClick(fruit: any) {
    fruit.quantity = fruit.quantity - 1
    this.calculateTotal()
  }

  calculateTotal() {
    this.total = this.selectedFruitList.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0)
  }

  onDelete(fruit: any) {
    let newSelectedList = this.selectedFruitList.filter((f) => {
      return f.id !== fruit.id
    })
    this.fruitService.setFruitList(newSelectedList)
    this.calculateTotal()
  }


}
