import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fruits: Type[];
  basket = [];
  permission: boolean;
  constructor(private data: DataService) {
    this.fruits = [
      {
        id: 0,
        title: 'Apple',
        color: 'red',
        img: '../../assets/apple.jpg',
        total: 10,
      },

      {
        id: 1,
        title: 'Banana',
        color: 'yellow',
        img: '../../assets/banana.jpg',
        total: 10,
      },

      {
        id: 2,
        title: 'Orange',
        color: 'orange',
        img: '../../assets/orange.png',
        total: 10,
      },
    ];
  }

  ngOnInit(): void {
    this.permission = this.data.getPermision();
    //alert(this.permission);
  }
  addToBasket(id) {
    if (this.permission) {
      this.fruits.forEach((element) => {
        if (element.id == id) {
          if (element.total !== 0) {
            element.total = element.total - 1;
            this.basket.unshift(element);
          }
        }
      });
    } else {
      alert('You don`t have required permission');
    }
  }
  removeFromBasket(id) {
    if (this.basket[0].id == id) {
      this.fruits[id].total = this.fruits[id].total + 1;
      this.basket.splice(0, 1);
    } else {
      alert('Follow Last in FirtsOut to Remove');
    }
  }
}
export class Type {
  id: number;
  title: string;
  color: string;
  img: string;
  total: number;
}
