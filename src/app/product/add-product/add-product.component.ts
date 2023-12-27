import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form!: FormGroup;
  list: Category[] = [];
  constructor(private pService: ProductService,
    private router: Router, private catservice: CategoryService) { }
  ngOnInit(): void {


    this.catservice.getList().subscribe(result => //to get categorie elements to reselt using getlist().
    {
      console.log(result);  //to print result in console
      this.list = result; //pass the same to list
    }, err => {
      alert(err);
    }
    ),

      //form should be initialized
      this.form = new FormGroup({
        id: new FormControl(0),
        name: new FormControl('', Validators.required),
        price: new FormControl(null, [Validators.min(1), Validators.required]),
        categoryId: new FormControl('', Validators.required),
        manufacturedDate: new FormControl('', Validators.required),
        imageUrl: new FormControl('', Validators.required)
      })
  }

  submit() {
    console.log(this.form.value);
    this.pService.add(this.form.value).subscribe(result => {
      alert('added success');
      //redirect to category list
      this.router.navigate(['/product']);
    }, err => {
      alert('error');
      console.log(err);
    })
  }

}

