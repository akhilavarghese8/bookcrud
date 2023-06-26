import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interface/book'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private http:HttpClient) { }
  getallbooks():Observable<Book[]>{
    return this.http.get<Book[]>(`https://fakerestapi.azurewebsites.net/api/v1/Books`)
    
  }
  createbooks(postdata:any){
   
    return this.http.post<Book[]>(`https://fakerestapi.azurewebsites.net/api/v1/Books `,postdata)
  }
  // editbook(id:number,postdata:any){
  //   return this.http.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`,postdata)
  // }
  getbooks(bid:any){
    const url = "https://fakerestapi.azurewebsites.net/api/v1/Books/"+bid;
    return this.http.get<Book[]>(url);

  }

  editbook(data: any,bid:any){

    const url = "https://fakerestapi.azurewebsites.net/api/v1/Books/"+bid

    return this.http.put<Book[]>(url,data)




  }
  deletebook(id:any){
    const url="https://fakerestapi.azurewebsites.net/api/v1/Books/"+id
    return this.http.delete<Book[]>(url)
  }
}
