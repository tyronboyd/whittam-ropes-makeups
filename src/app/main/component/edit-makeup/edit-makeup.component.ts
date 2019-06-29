import { Component, OnInit } from '@angular/core';
import {MakeupService} from "../../services/makeup.service";
import {Makeup} from "../../model/makeup.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-makeup',
  templateUrl: './edit-makeup.component.html',
  styleUrls: ['./edit-makeup.component.sass']
})
export class EditMakeupComponent implements OnInit {

  public makeup: Makeup = new Makeup();
  public makeupId: string;

  constructor(private makeupService: MakeupService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
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

}
