import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AddCategoryDto } from '../models/category/add-category-dto';
import { Category } from '../models/category/category';
import { UpdateCategoryDto } from '../models/category/update-category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private url = "Category";

  getCategoriesByUserId () : Observable<Array<Category>> {
    return this.http.get<Array<Category>>(`${environment.apiUrl}/${this.url}/categories`);
  }

  getCategory (id?: number) : Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  getCategoryByUserId (id?: number) : Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/${this.url}/${id}/category-by-user-id`);
  }

  // searchPosts(searchText: string) : Observable<Array<Post>> {
  //   return this.http.get<Array<Post>>(`${environment.apiUrl}/${this.url}/${searchText}/search`);
  // }

  addCategory(addCategory: AddCategoryDto): Observable<Category> {
    return this.http.post<Category>(`${environment.apiUrl}/${this.url}`, addCategory);
  }

  updateCategory(updateCategoryDto: UpdateCategoryDto, expenseId?: number): Observable<Category> {
    return this.http.put<Category>(`${environment.apiUrl}/${this.url}/${expenseId}`, updateCategoryDto);
  }

  deleteCategory(id?: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
