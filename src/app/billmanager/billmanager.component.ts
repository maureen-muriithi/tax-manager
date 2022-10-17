import { Component, OnInit } from '@angular/core';
import { BillManagerService } from './bill-manager.service';
import {take} from 'rxjs'

@Component({
  selector: 'app-billmanager',
  templateUrl: './billmanager.component.html',
  styleUrls: ['./billmanager.component.scss']
})
export class BillmanagerComponent implements OnInit {
  myData: any = [];
  
  constructor(private billManagerService: BillManagerService) { 

  }
  public onDelete(id:number) {
    this.billManagerService.onDelete(id).pipe(take(1)).subscribe(() => {
      this.ngOnInit();
    });
  }
 public onCreate(){

 }
public onUpdate(id:number){
  this.billManagerService.onUpdate(id).pipe(take(1)).subscribe(() => {
    this.ngOnInit();
  });
  
}
  ngOnInit(): void {
    this.billManagerService.getBills().pipe(take(1)).subscribe((data) => {
     this.myData = data;
    });
    
  
  }

}
