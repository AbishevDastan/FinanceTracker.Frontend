import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense/expense';
import { AddExpenseDto } from '../models/expense/add-expense-dto';
import { UpdateExpenseDto } from '../models/expense/update-expense-dto';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  private url = "Expense";

  getExpensesByUserId () : Observable<Array<Expense>> {
    return this.http.get<Array<Expense>>(`${environment.apiUrl}/${this.url}/expenses`);
  }

  getExpense (expenseId?: number) : Observable<Expense> {
    return this.http.get<Expense>(`${environment.apiUrl}/${this.url}/${expenseId}`);
  }

  getExpenseByUserId (postId?: number) : Observable<Expense> {
    return this.http.get<Expense>(`${environment.apiUrl}/${this.url}/${postId}/expense-by-user-id`);
  }

  // searchPosts(searchText: string) : Observable<Array<Post>> {
  //   return this.http.get<Array<Post>>(`${environment.apiUrl}/${this.url}/${searchText}/search`);
  // }

  addExpense(addExpense: AddExpenseDto): Observable<Expense> {
    return this.http.post<Expense>(`${environment.apiUrl}/${this.url}`, addExpense);
  }

  updateExpense(updateExpense: UpdateExpenseDto, expenseId?: number): Observable<Expense> {
    return this.http.put<Expense>(`${environment.apiUrl}/${this.url}/${expenseId}`, updateExpense);
  }

  deleteExpense(expenseId?: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${expenseId}`);
  }
}
