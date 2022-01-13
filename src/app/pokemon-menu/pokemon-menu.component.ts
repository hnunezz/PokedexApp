import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  viewProviders: [MatIconRegistry],
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.scss']
})
export class PokemonMenuComponent {

  public aberto:boolean = false;
  public teste: number = 1;
  public readonly URL_GIT:string = 'https://github.com/hnunezz';
  public readonly URL_LINKEDIN:string = 'https://www.linkedin.com/in/henriquenunes27/';

  constructor( @Inject(DOCUMENT) private document: Document, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router) 
  {
    iconRegistry.addSvgIcon('arrow_right',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/arrow_right.svg'));
    iconRegistry.addSvgIcon('arrow_left',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/arrow_left.svg'));
    iconRegistry.addSvgIcon('linkedin',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin-icon.svg'));
    iconRegistry.addSvgIcon('github',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/github-icon.svg'));
    iconRegistry.addSvgIcon('home',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/home-icon.svg'));
    iconRegistry.addSvgIcon('battle',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/battle-icon.svg'));

   }

  navigate(urlNavigate: string): void {
     window.open(urlNavigate,"_blank");
  }

  goToLogin() {
    this.router.navigate(['/PokeBattle'])
  }
}
