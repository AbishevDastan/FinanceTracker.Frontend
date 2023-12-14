import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private categoryService: CategoryService) { }
  
  @Input() category?: { id: number; name: string; userId: number };


  deleteCategory() {
    this.categoryService.deleteCategory(this.category?.id).subscribe((data) =>{
      console.log('Category deleted successfully:', data);
    },
    (error) => {
      console.error('Error deleting category:', error);
    });
  }
}

