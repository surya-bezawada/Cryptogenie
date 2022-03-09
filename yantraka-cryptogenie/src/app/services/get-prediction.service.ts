import { GET_PAYLOAD } from './../shared/urls';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetPredictionService {

  constructor(public apiService: ApiService) { }

  getPrediction(timestamp: any): Observable<any> {
    return this.apiService.get(GET_PAYLOAD+'ts=' + timestamp).pipe(share())
  }
}
