import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './models/bus';
import { Observable } from 'rxjs';
import { _baseUrl } from '../environment';

@Injectable()
export class BusRepository {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<Bus[]> {
        return this.http.get<Bus[]>(`${_baseUrl}bus`);
    }
}