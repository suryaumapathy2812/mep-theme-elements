import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  srcWidth!: number;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.srcWidth.subscribe(res => this.srcWidth = res);
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    const height = window.innerHeight;
    this.appService.updateSrcHeight(height);
    const width = window.innerWidth;
    this.appService.updateSrcWidth(width);
  }


}
