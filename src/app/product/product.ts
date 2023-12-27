import { Category } from "../category/category";

export interface Products {
    id:number;
    name:string;
    price:number;
    category:Category;
    categoryId:number;
    manufacturedDate:Date;
    imageUrl:URL;
    

}
