import { Component } from '@angular/core';
import { Menu } from './menu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  items: Menu[] = [
    {item: `10pc Grilled Tenders`, category: `Dinner`, price: 14.99},
    {item: `Large Pizza 4 Toppings`, category: `Dinner`, price: 14.99},
    {item: `5pc Whole Wings w/ Fries`, category: `Dinner`, price: 6.99},
    {item: `10pc Wing Dings w/ Fries`, category: `Dinner`, price: 8.99},
    {item: `Philly Cheesesteak Sub`, category: `Subs`, price: 8.99},
    {item: `Grilled Chicken Sub`, category: `Subs`, price: 8.99},
    {item: `Taco Sub`, category: `Subs`, price: 6.99},
    {item: `Ceasar Salad`, category: `Salads`, price: 5.99},
    {item: `House Salad`, category: `Salads`, price: 4.99},
    {item: `Cobb Salad`, category: `Salads`, price: 9.99},
    {item: `Breadsticks`, category: `Sides`, price: 4.99},
    {item: `Cheesesticks`, category: `Sides`, price: 3.99},
    {item: `BBQ Fries`, category: `Sides`, price: 2.99},
    {item: `Fries`, category: `Sides`, price: 2.99},
    {item: `Chilli Cheese Fries`, category: `Sides`, price: 6.99},
    {item: `2 Liter soda`, category: `Beverages`, price: 2.99},
    {item: `Sweet Iced Tea 32oz`, category: `Beverages`, price: 1.99},
    {item: `Cinnamon Roll`, category: `Dessert`, price: 4.99},
    {item: `Cake`, category: `Dessert`, price: 3.99}
  ];
}
