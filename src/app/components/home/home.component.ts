import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fruitService: FruitService, private router: Router) {}

  fruitList: any[] = []

  selectedList:any[] = []

  ngOnInit() {
    this.fruitService.getAllFruitList.subscribe((allFruitList: any) => {return this.fruitList = allFruitList})
  }

  onFruitClick(event: any) {
    let selectedFruit = this.fruitList.filter((fruit: any) => {
     return fruit.id == event.target.value 
    })

    if(event.target.checked === true) {
      this.selectedList.push(selectedFruit[0])
    } else if (event.target.checked === false) {
      let fruitIndex = this.selectedList.indexOf(selectedFruit)
      this.selectedList.splice(fruitIndex, 1)
    }
  }

  onSubmitClick() {
    this.fruitService.setFruitList(this.selectedList)
    this.router.navigate(["/checkout"])
  }

}
