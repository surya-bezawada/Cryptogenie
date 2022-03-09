import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { TEST_URL } from '../shared/urls';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(public apiService: ApiService) {

   }

   signUp(params: any): Observable<any> {
    return this.apiService.post(TEST_URL, params).pipe(share())
  }
}
