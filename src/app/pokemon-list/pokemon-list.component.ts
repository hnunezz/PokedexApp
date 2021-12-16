import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/Pokemons.models';
import { Type } from 'src/models/Types.models';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent{

  public Pokemons : Pokemon[] = [];
  public showButton:boolean = false;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    public pokemonService : PokemonService
    ) {}

  @HostListener('window:scroll')
    onWindowScroll(): void
    {
      const yOffSet = window.pageYOffset;
      const scrollTop = this.document.documentElement.scrollTop;
      this.showButton = (yOffSet || scrollTop) > 510;
    }

}
