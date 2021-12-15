import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/Pokemons.models';
import { Type } from 'src/models/Types.models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public Pokemons : Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      name: 'Bulbasour',
      number: 1, 
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
      name: 'Ivysaur',
      number: 2, 
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      name: 'Charmander',
      number: 4, 
      types: [
        Type.Fire,
      ],
    }
  ];


  constructor() {}

  ngOnInit(): void {
  }

}
