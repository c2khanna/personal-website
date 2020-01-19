import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  headingConfig: NgsRevealConfig;
  bodyConfig: NgsRevealConfig;
  isButtonEnabled: Boolean = true;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('message') message: ElementRef;
  @ViewChild('number') number: ElementRef;


  constructor() {
    this.headingConfig = {reset: true, viewFactor: 0.9, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
    this.bodyConfig = {reset: true, viewFactor: 0.5, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
  }

  ngOnInit() {
  }

  handleSuccess(): void{
    this.name.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.message.nativeElement.value = '';
    this.number.nativeElement.value = '';
    this.isButtonEnabled = true;
    alert('Email sent successfully!');
  }

  sendEmail(): void {
    this.isButtonEnabled = false;
    let name: String = this.name.nativeElement.value;
    let email: String = this.email.nativeElement.value;
    let message: String = this.message.nativeElement.value;
    let number: String = this.number.nativeElement.value;

    if(name === "" || message === "" || email === ""){
      alert("One or more of the required fields are empty");
      this.isButtonEnabled = true;
    } else {
      let mailBody: String = message+"\n\nMy contact info is:\n"+ name + "\n" + email + "\n" + number;
      fetch("https://us-central1-personalwebsite-234004.cloudfunctions.net/sendgridEmail?sg_key=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", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
          subject: "Inquiry from personal website",
          body: mailBody,
          to: "chaitanyakhanna13@gmail.com",
          from: "chaitanyakhanna13@gmail.com"
        })
      })
      .then( (response) => {
        console.log('i was successful');
        this.handleSuccess();
      })
      .catch( (error) =>{
        console.log('i errored out');
        alert("Something went wrong, please try again");
        console.log(error);
        this.isButtonEnabled = true;
      });
    }
  }

}
