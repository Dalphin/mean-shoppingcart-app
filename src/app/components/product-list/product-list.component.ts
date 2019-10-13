import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal]
})
export class ProductListComponent implements OnInit {
  products: any = [];
  productForm: FormGroup;
  constructor(
    private shoppingCartService: ShoppingCartService, 
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private ngZone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private activeModal: NgbActiveModal
  ) {  
    config.backdrop = 'static';
    config.keyboard = false;
    this.createForm();
  }

  ngOnInit() {
    this.getProducts();
  }

  createForm() {
    this.productForm = this.fb.group({
      product_name: ['', Validators.required ],
      product_quantity: ['', Validators.required ],
      product_price: ['', Validators.required ]
    });
  }

  open(content) {
    this.modalService.open(content, {centered: true});
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  

  getProducts() {
    return this.shoppingCartService.getProducts()
      .subscribe(
        (res => this.products = res),
        (err => console.log(err))        
      )
  }

  onSubmitProduct() {
      if (!this.productForm.valid) {
        return false;
      } else {
        this.shoppingCartService.addProduct(this.productForm.value).subscribe(
          (res) => {
            console.log('Employee successfully created!')
            this.getProducts();
            console.warn(this.activeModal," ??? ");
            this.activeModal.close();
          }, (error) => {
            console.log(error);
          });
      }
  }

 
}
