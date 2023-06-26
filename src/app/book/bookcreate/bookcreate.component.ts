import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent implements OnInit {
  selectedBook: any = null
  add_mode: boolean = true;
  title_btn = 'Add'
  bid = "";

  constructor(private formBuilder: FormBuilder, private service: BookService, private messageService: MessageService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.bid = this.route.snapshot.params["id"]
    // console.log("id", this.bid);
    this.add_mode = !this.bid


    if (!this.add_mode) {
      // console.log("inside edit");
      // console.log("id", this.bid);
      this.title_btn = 'update'
      this.service.getbooks(this.bid).subscribe(
        (response: any) => {
          // console.log(response);
          this.bookform.patchValue({
            id: response.id,
            title: response.title,
            description: response.description,
            pageCount: response.pageCount,
            excerpt: response.excerpt,
            publishDate: new Date(response.publishDate)
          })
        })
    } else {
      this.title_btn = "Add"

    }


  }

  bookform = new FormGroup({
    id: new FormControl("", Validators.required),
    title: new FormControl("", Validators.required,),
    description: new FormControl("", Validators.required,),
    pageCount: new FormControl("", Validators.required),
    excerpt: new FormControl("", Validators.required),
    publishDate: new FormControl(new Date(), Validators.required)
  })



  get id() {
    return this.bookform.get("id")
  }
  get title() {
    return this.bookform.get("title")
  }
  get description() {
    return this.bookform.get("description")
  }
  get pagecount() {
    return this.bookform.get("pageCount")
  }
  get excerpt() {
    return this.bookform.get("excerpt")
  }
  get publishDate() {
    return this.bookform.get("publishDate")
  }




  addingbooks() {

    if (this.bid != null) {
      this.service.editbook(this.bookform.value,this.bid).subscribe(
        response=>{
          this.messageService.add({ severity: 'success', summary: 'edited', detail: 'book edited' })
          console.log(response);
          
        }
      )
        } else {

      this.service.createbooks(this.bookform.value).subscribe(
        response => {
          console.log(response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'book add' })
        })
    }

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.selectedBook) {
  //     console.log(this.bookform.value)
  //     this.bookform.patchValue(this.selectedBook)

  //   }
  // }
   


}