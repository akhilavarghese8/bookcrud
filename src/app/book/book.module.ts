import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

// import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    BookComponent,
    BooklistComponent,
    BookcreateComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    CalendarModule,
    ToastModule,
    ConfirmPopupModule,
    

    
    
  ],
  providers:[MessageService,ConfirmationService]
})
export class BookModule { }
