import { Component,OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../interface/book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  selectedProduct:any=null
  constructor(){}
  ngOnInit(): void {
    
  }
  
 
}
