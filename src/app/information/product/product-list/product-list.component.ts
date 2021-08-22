import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 // public product:Product[];
 // private highlightId:number|string; 

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

    ngOnInit() {
     // this.product = this.productService.getProducts();
      let params = this.route.snapshot.paramMap;
      if(params.has('id')){
      //this.highlightId = params.get('id');
      }
      //console.log(this.products);
      //console.log(this.route);
      }

}
