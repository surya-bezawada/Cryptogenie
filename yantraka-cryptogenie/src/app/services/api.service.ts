import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as info0 from "src/new_payload/new_payload_0.json";
import * as info1 from "src/new_payload/new_payload_1.json";
import * as info2 from "src/new_payload/new_payload_2.json";
import * as info3 from "src/new_payload/new_payload_3.json";
import * as info4 from "src/new_payload/new_payload_4.json";
import * as info5 from "src/new_payload/new_payload_5.json";
import * as info6 from "src/new_payload/new_payload_6.json";
import * as info7 from "src/new_payload/new_payload_7.json";
import * as info8 from "src/new_payload/new_payload_8.json";
import * as info9 from "src/new_payload/new_payload_9.json";
import * as info10 from "src/new_payload/new_payload_10.json";
import * as info11 from "src/new_payload/new_payload_11.json";
import * as info12 from "src/new_payload/new_payload_12.json";
import * as info13 from "src/new_payload/new_payload_13.json";
import * as info14 from "src/new_payload/new_payload_14.json";
import * as info15 from "src/new_payload/new_payload_15.json";
import * as info16 from "src/new_payload/new_payload_16.json";
import * as info17 from "src/new_payload/new_payload_17.json";
import * as info18 from "src/new_payload/new_payload_18.json";
import * as info19 from "src/new_payload/new_payload_19.json";
import * as info20 from "src/new_payload/new_payload_20.json";
import * as info21 from "src/new_payload/new_payload_21.json";
import * as info22 from "src/new_payload/new_payload_22.json";
import * as info23 from "src/new_payload/new_payload_23.json";
import * as info24 from "src/new_payload/new_payload_24.json";
import * as info25 from "src/new_payload/new_payload_25.json";
import * as info26 from "src/new_payload/new_payload_26.json";
import * as info27 from "src/new_payload/new_payload_27.json";
import * as info28 from "src/new_payload/new_payload_28.json";
import * as info29 from "src/new_payload/new_payload_29.json";
import * as info30 from "src/new_payload/new_payload_30.json";
import * as info31 from "src/new_payload/new_payload_31.json";
import * as info32 from "src/new_payload/new_payload_32.json";
import * as info33 from "src/new_payload/new_payload_33.json";
import * as info34 from "src/new_payload/new_payload_34.json";
import * as info35 from "src/new_payload/new_payload_35.json";
import * as info36 from "src/new_payload/new_payload_36.json";
import * as info37 from "src/new_payload/new_payload_37.json";
import * as info38 from "src/new_payload/new_payload_38.json";
import * as info39 from "src/new_payload/new_payload_39.json";
import * as info40 from "src/new_payload/new_payload_40.json";
import * as info41 from "src/new_payload/new_payload_41.json";
import * as info42 from "src/new_payload/new_payload_42.json";
import * as info43 from "src/new_payload/new_payload_43.json";
import * as info44 from "src/new_payload/new_payload_44.json";
import * as info45 from "src/new_payload/new_payload_45.json";
import * as info46 from "src/new_payload/new_payload_46.json";
import * as info47 from "src/new_payload/new_payload_47.json";
import { environment } from "src/environments/environment";

// import new_payload from 'src/new_payload/new'
interface Payloads {
	status_code: number;
	execution_timestamp: string;
	payload: {
		asset: string;
		base_asset: string;
		quote_asset: string;
		timestamp: string;
		current: {
		};
		previous: {
		}[];
		metrics: {};
	}[];
}

@Injectable({
	providedIn: "root",
})
export class ApiService {
	new_payloads: Payloads[] = [
		info0,
		info1,
		info2,
		info3,
		info4,
		info5,
		info6,
		info7,
		info8,
		info9,
		info10,
		info11,
		info12,
		info13,
		info14,
		info15,
		info16,
		info17,
		info18,
		info19,
		info20,
		info21,
		info22,
		info23,
		info24,
		info25,
		info26,
		info27,
		info28,
		info29,
		info30,
		info31,
		info32,
		info33,
		info34,
		info35,
		info36,
    info37,
		info38,
		info39,
		info40,
		info41,
		info42,
		info43,
		info44,
		info45,
		info46,
		info47,
	];

	constructor(private http: HttpClient) {}

	OnInit(): void {
		// console.log(this.new_payloads);
	}
	// get(path: string) // :Observable<any>
	// {
	// 	let total = 48;
	// 	for (let info of this.new_payloads) {
    //   let dateTime = new Date(info.execution_timestamp).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
    // //   console.log(info.execution_timestamp)
    //   let currentTime = new Date().getHours() + ':' + new Date().getMinutes()
      
    //   if(dateTime.split(':')[0] === currentTime.split(':')[0]){
    //     // console.log(info)
    //     // console.log(dateTime)
    //     let data = parseInt(currentTime.split(':')[1]) - parseInt(dateTime.split(':')[1])
	// 	// console.log(data)
    //     if(data > 0){
    //       return info
    //     } 
    //   }
	// 	}
	// 	return "Yo";

	// 	// return this.http
	// 	//   .get(path, { headers: this.setHeaders() })
	// 	//   .pipe(catchError(this.handleError));
	// }
	private setYantrakaToken() {
		var headersConfig:any={};
		headersConfig['x-api-key'] = environment.AUTH_TOKEN;
		return headersConfig
	  }
	check(
		path: string): Observable<any> {

		return this.http
		  .get(path, {headers: this.setYantrakaToken()})
	  }
	  get(
		path: string): Observable<any> {

		return this.http
		  .get(path, {headers: this.setYantrakaToken()})
	  }
	  post(path: string, params: any): Observable<any>{
		return this.http
		.post(path,  JSON.stringify(params) , {headers: this.setYantrakaToken(), observe: 'response'})
	  }
	  private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
		  console.error('An error occurred:', error.error.message);
		} else {
		  console.log(
			`Backend returned code ${error.status}, ` + `body was: ${error.message}`
		  );
		}
		return throwError(error);
	  }
	
	readFile(file: File) {
		var reader = new FileReader();
		reader.onload = () => {
			console.log(reader.result);
		};
		reader.readAsText(file);
	}
}
