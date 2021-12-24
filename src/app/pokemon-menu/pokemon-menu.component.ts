import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.scss']
})
export class PokemonMenuComponent implements OnInit {

  public aberto:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
