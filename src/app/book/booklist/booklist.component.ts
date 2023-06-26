import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/interface/book';
import { Router,ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {Table} from 'primeng/table'

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {

  books:Book[]=[]
  
  constructor(private service:BookService,private route:Router,private confirmationService:ConfirmationService,private messageService:MessageService){}
  ngOnInit(): void {
    this.service.getallbooks().subscribe(
      response=>{
        this.books=response
      }
    )
  }
  onSearchdata(table:Table,event:any){
    table.filterGlobal((event.target.value as string),'contains')
  }
  addbooks(){
    this.route.navigate(['book/create'])
  }
  saveproducttolist(newData:any){
    this.books.unshift(newData)
  }
  editbooks(id:any){
    this.route.navigate(['book/edit/'+id])
  }
  deletebooks(id:any,event:Event){
    
   this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.service.deletebook(id).subscribe(
            response=>{
              console.log(response);
              
            }
          )


          
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
  });
}
  }

