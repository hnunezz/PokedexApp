import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/Pokemons.models';
import { Type } from 'src/models/Types.models';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public Pokemons : Pokemon[] = [];


  constructor(public pokemonService : PokemonService) {}

  ngOnInit(): void {
  }

}
