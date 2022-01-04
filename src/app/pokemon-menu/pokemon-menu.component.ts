import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  viewProviders: [MatIconRegistry],
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.scss']
})
export class PokemonMenuComponent implements OnInit {

  public aberto:boolean = false;
  public url_1:string = 'https://github.com/hnunezz';
  public url_2:string = 'https://www.linkedin.com/in/henriquenunes27/';

  constructor( @Inject(DOCUMENT) private document: Document, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('arrow_right',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/arrow_right.svg'));
    iconRegistry.addSvgIcon('arrow_left',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/arrow_left.svg'));
    iconRegistry.addSvgIcon('linkedin',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin-icon.svg'));
    iconRegistry.addSvgIcon('github',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/github-icon.svg'));
    iconRegistry.addSvgIcon('home',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/home-icon.svg'));
    iconRegistry.addSvgIcon('battle',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/battle-icon.svg'));

   }

  ngOnInit(): void {
  }


  goToGithub(url_1: string): void {
     window.open(this.url_1,"_blank");
  }

  goToLinkedin(url_2:string): void {
     window.open(this.url_2,"_blank");
  }
}
