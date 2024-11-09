import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    { name: 'Spaghetti', description: 'Classic Italian pasta.', price: 12.99 },
    { name: 'Pizza Margherita', description: 'Tomato, mozzarella, basil.', price: 10.99 },
    { name: 'Caesar Salad', description: 'Fresh lettuce with Caesar dressing.', price: 8.99 },
  ];
}
