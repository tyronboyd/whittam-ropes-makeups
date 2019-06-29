import { Component, OnInit } from '@angular/core';
import {MakeupService} from "../../services/makeup.service";
import {Makeup} from "../../model/makeup.model";
import {ActivatedRoute, Router} from "@angular/router";
import {InventoryService} from "../../services/inventory.service";
import {Inventory} from "../../model/inventory.model";

@Component({
  selector: 'app-add-remove-product-codes',
  templateUrl: './add-remove-product-codes.component.html',
  styleUrls: ['./add-remove-product-codes.component.scss']
})
export class AddRemoveProductCodesComponent implements OnInit {

  public makeup: Makeup = new Makeup();
  public inventory: Array<Inventory> = Array<Inventory>();
  public makeupId: string;
  public selectedInventory;

  constructor(private makeupService: MakeupService, private route: ActivatedRoute,
              private router: Router, private inventoryService: InventoryService) { }

  ngOnInit() {
    this.getInventory();
    this.route.params.subscribe(param => {
      if (param && param.id) {
        this.makeupService.getMakeupById(param.id).subscribe(result => {
          this.makeup = result;
        }, err => {
          console.error(err);
        });
      }
    });
  }

  public getInventory(): void {
    this.inventoryService.getInventory().subscribe(result => {
      this.inventory = result;
    }, err => {
      console.error(err);
    });
  }

  public onChange(value: string): void {
    this.makeup.productCodes.push(value);
    this.makeupService.saveMakeup(this.makeup).subscribe(result => {

    }, err => {
      console.error(err);
    });
  }

  public removeProduct(code: string, index: number): void {
    this.makeup.productCodes.splice(index, 1);
    this.makeupService.saveMakeup(this.makeup).subscribe(result => {

    }, err => {
      console.error(err);
    });
  }

  public back(): void {
    this.router.navigate(['whittam-ropes-makeups/makeup-list']);
  }

}
