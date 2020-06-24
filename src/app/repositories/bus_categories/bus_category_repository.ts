import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusCategorie } from './models/bus_categorie';
import { Observable } from 'rxjs';
import { _baseUrl } from '../environment';

@Injectable()
export class BusCategoryRepository {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<BusCategorie[]> {
        return this.http.get<BusCategorie[]>(`${_baseUrl}/bustypes`);
    }
}