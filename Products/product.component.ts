import { Component } from '@angular/core';

// decoration
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    /*styles:[
            `.a{text-align:center}`
    
    ]*/

    styleUrls: ['./product.component.css']
})

//make it availble 
export class ProductComponent {
    title: string = 'Product App';
    desc: string = "Product Details";
    width: number=50;
    products: any[] = [
        { productName: 'Soap', productCode: 'AZ-AP', price: 67.89, imageUrl: 'https://openclipart.org/image/400px/svg_to_png/320197/arabiancamels-1831.png' },
        { productName: 'Gas', productCode: 'AZ90-P', price: 90, imageUrl: 'https://openclipart.org/image/400px/svg_to_png/320197/arabiancamels-1831.png' }
    ];

}