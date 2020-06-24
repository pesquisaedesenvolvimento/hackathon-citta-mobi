import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusLine } from './models/bus_line';
import { _baseUrl } from '../environment';

@Injectable()
export class BusLineRepository {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<BusLine[]> {
        return this.http.get<BusLine[]>(`${_baseUrl}/buslines`);
    }
}