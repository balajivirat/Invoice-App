import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  value: any;
  filterdata: any;

  constructor(public userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userservice.getcontent().subscribe((res => {
      this.data = res;
      console.log('data',this.data);
      
    }));
  }
  delete(value: any) {
    console.log('deleteeeeeeeee',value);
    this.userservice.deletecontent(value).subscribe((res => {
      this.ngOnInit();
     })
    )
  }
  edit(values: any) {
    this.value = values;
    console.log('edit............',this.data.length);
    $("#myModal").modal('show');
    for (let i = 0; i < this.data.length; i++) {
      if (this.value == this.data[i]._id) {
        this.filterdata = [this.data[i]];
        console.log(this.data[i]);
      }
      console.log('filterdata............', this.filterdata); 
    }
  }
  update() {
    console.log('store.........', this.filterdata);
    this.userservice.editcontent(this.filterdata, this.value).subscribe((res => {
      $("#myModal").modal('hide');
      this.ngOnInit();
     }))
  }
  form(){
    this.router.navigate(['./form']);
  }
}
