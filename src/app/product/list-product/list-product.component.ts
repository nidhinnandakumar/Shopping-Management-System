import { Component, OnInit } from '@angular/core';
import { Products } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: Products[] = [];
  private productId=0;
  constructor(private pService: ProductService) { }
  ngOnInit(): void {
    this.pService.getList().subscribe(result => {
      console.log(result);
      this.list = result;
    }, err => {
      alert(err);
    })
  }
delete(){
  console.log('product to delete:' + this.productId);
  this.pService.delete(this.productId).subscribe(()=>{
    alert('delete successfull');
    this.ngOnInit();
  },err=>{
    console.log(err);
    alert('error');
  })

}
  setProductId(id:number){
    this.productId=id;
  }
}
