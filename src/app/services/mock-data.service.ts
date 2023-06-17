import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseResult } from '../models/response-result';
import { Mocki } from '../models/mocki';
import { map } from 'rxjs/operators';
import { TypeConversionPipe } from '../pipes/type-conversion.pipe';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(
    private httpClient: HttpClient,
    private typeConversionPipe: TypeConversionPipe
  ) { }


  getDataFromMocki(): Observable<Mocki[]> {
    const url: string = "https://mocki.io/v1/e161b9f5-726e-4d8b-af87-1b2a0fe4e93b";
    return this.httpClient.get<ResponseResult>(url).pipe(
      map(response => {
        const convertedData: Mocki[] = response.data.map((item: Mocki) => ({
          id: this.typeConversionPipe.transform(item.id),
          name: this.typeConversionPipe.transform(item.name),
          checked: this.typeConversionPipe.transform(item.checked),
          changed: false
        }));

        return convertedData;
      })
    );
  }
}
