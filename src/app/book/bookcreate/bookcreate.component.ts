import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { trim } from 'lodash';


@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent implements OnInit, OnDestroy {
  // selectedBook: any = null
  add_mode: boolean = true;
  title_btn = 'Add'
  bid = "";
  booksubscribe = new Subscription

  title1: string = ""

  constructor(private formBuilder: FormBuilder, private service: BookService, private messageService: MessageService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.bid = this.route.snapshot.params["id"]
    this.add_mode = !this.bid


    if (!this.add_mode) {

      this.title_btn = 'update'
      this.booksubscribe.add(this.service.getbooks(this.bid).subscribe(
        (response: any) => {

          this.bookform.patchValue({
            title: response.title,
            description: response.description,
            pageCount: response.pageCount,
            excerpt: response.excerpt,
            publishDate: new Date(response.publishDate)
          })
        }))
    } else {
      this.title_btn = "Add"

    }


  }

  bookform = new FormGroup({
    // id: new FormControl("", Validators.required,),
    title: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    pageCount: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(250)]),

    excerpt: new FormControl(null, [Validators.maxLength(250)]),
    publishDate: new FormControl(new Date(), [Validators.required,])
    // publishDate: new FormControl(new Date(), [Validators.required, this.futureDateValidator])
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

    if (this.bookform) {
      const titleControl = this.bookform.controls['title'];
      const descriptionControl = this.bookform.controls['description'];
  
      if (titleControl && descriptionControl) {
        const titleValue: any = titleControl.value;
        const descriptionValue: any = descriptionControl.value;
  
        titleControl.setValue(titleValue?.trim() || '');
        descriptionControl.setValue(descriptionValue?.trim() || '');
  
        // Proceed with other add functionality
      }
    }



    if (this.bid != null) {
      this.service.editbook(this.bookform.value, this.bid).subscribe(
        response => {
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

  ngOnDestroy(): void {
    this.booksubscribe.unsubscribe()
  }


}


