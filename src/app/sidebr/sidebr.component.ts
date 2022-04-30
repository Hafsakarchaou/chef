import { Component, ViewChild, OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs/operators';

import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebr',
  templateUrl: './sidebr.component.html',
  styleUrls: ['./sidebr.component.css']
})
export class SidebrComponent implements OnInit {

  


    @ViewChild(MatSidenav)
      sidenav!: MatSidenav; 
      constructor(private observer: BreakpointObserver) {}
    
      ngAfterViewInit() {
        this.observer
          .observe(['(max-width: 800px)'])
          .subscribe((res) => {
            if (res.matches) {
              this.sidenav.mode = 'over';
              this.sidenav.close();
            } else {
              this.sidenav.mode = 'side';
              this.sidenav.open();
            }
          });
        }
        
      ngOnInit(): void {
      }
    
    }


