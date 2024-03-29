import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  breadcrumb$: Observable<any[]>;

  constructor(private bsService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bsService.breadcrumbs$;
  }

}
