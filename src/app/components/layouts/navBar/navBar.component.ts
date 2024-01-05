import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit  {

  showMenu = false;
  isMidScreen: boolean = false;

  images:any = [
    "https://unsplash.it/640/425?image=30",
    "https://unsplash.it/640/425?image=56",
    "https://unsplash.it/640/425?image=50",
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.checkScreenSize();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1023) { // Adjust this value based on your breakpoint
      this.isMidScreen = true;
      console.log(this.isMidScreen);
    } else {
      this.isMidScreen = false;
      console.log(this.isMidScreen);
    }
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  currentIndex:number = 1;

  previous() {
    if (this.currentIndex > 1) {
      this.currentIndex = this.currentIndex - 1;
    }
    else{
      this.currentIndex = this.images.length;
    }
  }

  forward() {
    if (this.currentIndex < this.images.length) {
      this.currentIndex = this.currentIndex + 1;
    }
    else{
      this.currentIndex = 1;
    }
  }


}
