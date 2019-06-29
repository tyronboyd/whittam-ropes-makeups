import {Component, Input, OnInit} from "@angular/core";
import {MakeupService} from "../../services/makeup.service";
import {Makeup} from "../../model/makeup.model";
import {InventoryService} from "../../services/inventory.service";
import {Inventory} from "../../model/inventory.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public inventory: Array<Inventory> = new Array<Inventory>();
  @Input()
  public makeup: Makeup = new Makeup();
  public selectedInventory: string;
  public showAlert = false;
  public message = '';
  public alertType = '';
  @Input()
  public heading = 'Create Makeup';
  @Input()
  public disabled = false;
  @Input()
  public viewMode = false;

  constructor(private makeupService: MakeupService, private inventoryService: InventoryService,
              private router: Router) { }

  ngOnInit() {
    this.hideAlertMessage();
  }

  public saveMakeup(): void {
    this.hideAlertMessage();
    if (this.makeup.ref) {
      window.scrollTo(0, 0);
      this.makeupService.saveMakeup(this.makeup).subscribe(result => {
        this.showAlertMessage('Successfully saved Makeup.', 'success');
      }, err => {
        console.error(err);
        this.showAlertMessage('Error saving Makeup.', 'danger');
      });
    } else {
      window.scrollTo(0, 0);
      this.showAlertMessage('Ref No. is required', 'danger');
    }
  }

  public clear(): void {
    this.hideAlertMessage();
    this.makeup = new Makeup();
  }

  public showAlertMessage(message: string, alertType: string): void {
    this.message = message;
    this.alertType = alertType;
    this.showAlert = true;
  }

  public hideAlertMessage(): void {
    this.message = '';
    this.alertType = '';
    this.showAlert = false;
  }

  public viewMakeups(): void {
    this.router.navigateByUrl('/makeup-list');
  }

  public createMakeup(): void {
    this.router.navigate(['/create-makeup']);
  }

  public back(): void {
    this.router.navigate(['/makeup-list']);
  }


}
