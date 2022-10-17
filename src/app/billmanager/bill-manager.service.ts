import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BillmanagerComponent } from './billmanager.component';

@Injectable({
  providedIn: 'root'
})
export class BillManagerService {

  constructor(private http: HttpClient) { }

  getBills() {
    return this.http.get('http://localhost:8080/api/v1/taxmanager/bills');
    
  }
 onDelete(id: number) {
    return this.http.delete('http://localhost:8080/api/v1/taxmanager/bills/' + id);
  }
  //update the data
  onUpdate(id: number) {
   return this.http.put('http://localhost:8080/api/v1/taxmanager/bills/' + id, {});
  }

}
