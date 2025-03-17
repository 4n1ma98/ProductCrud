import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private baseUrl: string = 'https://localhost:7278/api/Product';

  constructor(private http: HttpClient) {}

  // Crear producto
  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreateProduct`, product);
  }

  // Leer productos
  readProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ReadProduct`);
  }

  // Actualizar producto
  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateProduct`, product);
  }

  // Eliminar producto
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteProduct/${id}`);
  }
}
