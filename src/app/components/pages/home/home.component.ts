import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddCategoryDto } from 'src/app/models/category/add-category-dto';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  @ViewChild('addCategoryForm') addCategoryForm: any;

  constructor(private userService: UserService,
    private categoryService: CategoryService,
    private router: Router) { }

    categories?: Array<Category>;
    addCategoryDto: AddCategoryDto = {
      name: ""
    };

    ngOnInit(){
      if(!this.isAuthenticated)
      {
        this.router.navigate(['login']).then();
      }

      this.getCategories();
    }

    get isAuthenticated() {
      return this.userService.isAuthenticated();
    }

    getCategories() {
      this.categoryService.getCategoriesByUserId().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
    }

    onAddCategorySubmit() {
      this.categoryService.addCategory(this.addCategoryDto).subscribe((data) => {
          console.log('Category added successfully:', data);
          this.categories?.unshift(data);
          this.addCategoryForm.resetForm();
        },
        (error) => {
          console.error('Error adding category:', error);
        }
      );
    }
}
