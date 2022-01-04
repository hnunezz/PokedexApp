import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable, ReplaySubject, retry, switchMap, tap } from 'rxjs';
import { Pokemon } from 'src/models/Pokemons.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];
  public pokemonsQuant:string = "151"; 

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
      types: result.types.map((t:any) => t.type.name) 
    });
  }
    
    
    // constructor(
    //   private http: HttpClient
    // ){}
    // // get apiListAllPokemons():Observable<any>{
    // //   const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    // //   this.http.get<any>(URL).pipe(
    // //         map(value => value.results),
    // //         map((value: any) => {
    // //           return from(value).pipe(
    // //             mergeMap((v: any) => this.http.get(v.url)),
    // //           );
    // //         }),
    // //         mergeMap(value => value),
    // //       ).subscribe((result: any) => this.pokemons[result.id] = {
            
    // //         image: result.sprites.front_default,
    // //         number: result.id,
    // //         name: result.name,
    // //         types: result.types.map((t:any) => t.type.name) 
    // //       });
    // // }

    // private url:string = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    // constructor(
    //     private http: HttpClient
    //   ){}
    //   get apiListAllPokemons():Observable<any>{
    //     return this.http.get<any>(this.url).pipe(
    //       tap( res => res),
    //       tap( res => { 
    //         res.results.map( (resPokemons:any) => {
    //           this.apiGetPokemons(resPokemons.url).subscribe(
    //             res => resPokemons.status = res
    //           )

    //         })
    //       })
    //     )
    //   }

    //   public apiGetPokemons(url:string) : Observable<any>{
    //     return this.http.get<any>(url).pipe(
    //       map(
    //         res => res
    //       )
    //     )
    //   }


    // get apiListAllPokemons(): Observable<any>{
    //   //     return this.httpClient.get<any>(this.URL).pipe(
    //   //       tap(value => value.results),
    //   //       tap((value:any) => {
    //   //         value.results.map((result: any) => this.pokemons[result.id] = {
            
    //   //           image: result.sprites.front_default,
    //   //           number: result.id,
    //   //           name: result.name,
    //   //           types: result.types.map((t:any) => t.type.name) 
    //   //         });
    //   //      }))
    //   // }
}
