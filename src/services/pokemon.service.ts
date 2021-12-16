import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, ReplaySubject, switchMap } from 'rxjs';
import { Pokemon } from 'src/models/Pokemons.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];
  public pokemonsQuant:string = "50"; 

  constructor(private httpClient : HttpClient) { 
    const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=' + `${this.pokemonsQuant}`;

    this.httpClient.get<any>(URL).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)),
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      name: result.name,
      types: result.types.map((t:any) => t.type.name),
    });
  }
}
