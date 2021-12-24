import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.scss']
})
export class PokemonMenuComponent implements OnInit {

  public aberto:boolean = false;
  public url_1:string = 'https://github.com/hnunezz';
  public url_2:string = 'https://www.linkedin.com/in/henriquenunes27/';

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }


  goToGithub(url_1: string): void {
     window.open(this.url_1,"_blank");
  }

  goToLinkedin(url_2:string): void {
     window.open(this.url_2,"_blank");
  }

}
