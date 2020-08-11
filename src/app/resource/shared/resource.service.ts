
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from './resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) {}

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>('/api/resources')
  }

  updateResource(id: string, body: Resource): Observable<Resource> {
    return this.http.patch<Resource>(`/api/resources/${id}`, body);
  }
}
