import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Array<Product> = [
    { Name: 'Cream', Price: 50, Desc: 'Album Cover', ProductPath: '../../../assets/img/Cream01-570x866.jpg' },
    { Name: 'Jimi Hendrix', Price: 50, Desc: 'Jimi Hendrix in Copenhagen, Denmark 1970 music poster', ProductPath: '../../../assets/img/jimi-hendrix-copenhagen-1970-music-poster.jpg' },
    { Name: 'Led Zepplin', Price: 50, Desc: 'Led Zepplin at Chicago Stadium, July 6, 1973', ProductPath: '../../../assets/img/LedZepplin1973.jpg' },
    { Name: 'Pearl Jam', Price: 50, Desc: 'Pearl Jam in Berlin, Germany 2014', ProductPath: '../../../assets/img/PearlJam01.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index) {
    console.log("Added", this.Products[index]);
  }
}
