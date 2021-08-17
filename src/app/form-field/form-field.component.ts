import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  emailPattern =
    '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' +
    '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  phoneNumber = '^((\\+91-?)|0)?[0-9]{10}$';
  contactForm = new FormGroup({
    organisation: new FormControl(),
    lead: new FormControl(),
    division: new FormControl(),
    instagram: new FormControl(),
    country: new FormControl(),
    city: new FormControl(),
    contact: new FormControl(),
    phone: new FormControl('', [Validators.pattern(this.phoneNumber)]),
    alternatecontact: new FormControl(),
    alternatephone: new FormControl('', [Validators.pattern(this.phoneNumber)]),
    email: new FormControl('', [Validators.pattern(this.emailPattern)]),
    addressline1: new FormControl(),
    addressline2: new FormControl(),
    pincode: new FormControl(),
    gstin: new FormControl(),
    tan: new FormControl(),
    pan: new FormControl(),
    companyname: new FormControl(),
    year: new FormControl(),
    source: new FormControl(),
    setuptype: new FormControl(),
    rentaltype: new FormControl(),
    transactionrate: new FormControl(),
    status: new FormControl(),
    feedback: new FormControl(),
    feedbackdate: new FormControl(),
    initialsetup: new FormControl(),
    basicrental: new FormControl(),
    additionalrent: new FormControl(),
    subscriptiontype: new FormControl(),
    hostingtype: new FormControl(),
    transferclients: new FormControl(),
  })
  data: any;
  constructor(public userservice: UserService, private router: Router) { }
  org: any;
  division: any;
  source: any;
  setup: any;
  rental: any;
  status: any;
  feedback: any;
  subscription: any;
  hosting: any;
  year: any;
  ngOnInit(): void {
    this.userservice.getOrganisation().subscribe((res => {
      this.org = res;
    }));
    this.userservice.getDivision().subscribe((res => {
      this.division = res;      
    }));
    this.userservice.getSource().subscribe((res => {
      this.source = res;
    }));
    this.userservice.getSetup().subscribe((res => {
      this.setup = res;
    }));
    this.userservice.getRental().subscribe((res => {
      this.rental = res;
    }));
    this.userservice.getStatus().subscribe((res => {
      this.status = res;
    }));
    this.userservice.getFeedback().subscribe((res => {
      this.feedback = res;
    }));
    this.userservice.getSubscription().subscribe((res => {
      this.subscription = res;
    }));
    this.userservice.getHosting().subscribe((res => {
      this.hosting = res;
    }));
    this.userservice.getYear().subscribe((res => {
      this.year = res;
    }));
  }

  onSubmit(){
    console.log('submittttttttttt',this.contactForm.value);
    this.userservice.postContent(this.contactForm.value).subscribe((res => {
      this.contactForm.reset();
      this.ngOnInit();
    }))
    
  }
  dashboard(){
    this.router.navigate(['./dashboard']);
  }
  get f() {
    return this.contactForm.controls;
  }
}
