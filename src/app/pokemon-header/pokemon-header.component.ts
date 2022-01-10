import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent implements OnInit {

    
  private setAllPokemons:any = this.pokemonService.pokemons;
  
  constructor(public pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  search(value : string){
    const filter = this.setAllPokemons.filter((res:any) =>{
      return !res.name.indexOf(value.toLowerCase());
    });
    this.pokemonService.pokemons = filter;
  }

}
