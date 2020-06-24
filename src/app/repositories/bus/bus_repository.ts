import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './models/bus';
import { Observable } from 'rxjs';

@Injectable()
export class BusRepository {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<Bus[]> {
        return this.http.get<Bus[]>('https://138fk4ea41.execute-api.eu-west-1.amazonaws.com/dev/bus');
    }
}