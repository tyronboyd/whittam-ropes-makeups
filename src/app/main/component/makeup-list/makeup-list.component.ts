import { Component, OnInit } from '@angular/core';
import {MakeupService} from "../../services/makeup.service";
import {Makeup} from "../../model/makeup.model";
import {MakeupSearchOptions} from "../../model/MakeupSearchOptions";
import {MakeupPageableModel} from "../../model/makeup-pageable.model";
import {ExportToCsv} from "export-to-csv";

@Component({
  selector: 'app-makeup-list',
  templateUrl: './makeup-list.component.html',
  styleUrls: ['./makeup-list.component.scss']
})
export class MakeupListComponent implements OnInit {

  public makeupList: MakeupPageableModel = new MakeupPageableModel();
  public makeupSearchOptions: MakeupSearchOptions = new MakeupSearchOptions();
  public currentPage: number;
  public makeupSearch: string;

  constructor(private makeupService: MakeupService) {
  }

  ngOnInit() {
    this.fetchMakeups();
  }

  public fetchMakeups(): void {
    this.makeupSearchOptions.sortBy = 'size, colour';
    if (this.makeupSearchOptions.curPageNumber && this.makeupSearchOptions.sortBy) {
      this.makeupService.getAllMakeups(this.makeupSearchOptions).subscribe(result => {
        this.makeupList = result;
      }, err => {
        console.error(err);
      });
    }
  }

  public searchMakeups(): void {
      this.fetchMakeups();
  }

  public pageChanged(event): void {
    this.makeupSearchOptions.curPageNumber = event.page;
    this.fetchMakeups();
  }

  public exportToCsv(): void {
    const options = {
      filename: 'Whittam-ropes-makeups',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Whittam Ropes Makeups',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    this.makeupService.getMakeupsToExport().subscribe(result => {
      const csvExporter = new ExportToCsv(options);
      csvExporter.generateCsv(result);
    }, err => {
      console.error(err);
    });
  }
}
