import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { getPokemonImage,getPokemonNumber,Pokemon } from 'src/models/Pokemons.models';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.scss']
})
export class PokemonBattleComponent{

  public Pokemons : Pokemon[] = [];
  public Aberto:boolean = false;
  public Aberto2:boolean = false;
  public Pokemon1!:Pokemon
  public Pokemon2!:Pokemon
  public result_victory1!:number;
  public result_victory2!:number;

  public result_tie:number = 0;


  @Input() public pokemon !: Pokemon;
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public pokemonService : PokemonService) {
    iconRegistry.addSvgIcon('victory-icon',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/checked-circle.svg'));
    iconRegistry.addSvgIcon('defeat-icon',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/unchecked-circle.svg'));
    iconRegistry.addSvgIcon('tie-icon',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/tie-circle.svg'));
    iconRegistry.addSvgIcon('close',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/closed-button.svg'));
   }

   public getPokemonImage = getPokemonImage;

   public getPokemonNumber = getPokemonNumber;
 
  FightOn(Pokemon1:Pokemon,Pokemon2:Pokemon){
      if(Pokemon1.atk == Pokemon2.atk)
        {
          console.log("Empate")
        }
      else if(Pokemon1.atk > Pokemon2.atk)
        {
          console.log("Vitoria Pokemon 1",Pokemon1.name)
        }
      else
        {
          console.log("Vitoria Pokemon 2",Pokemon2.name)
        }
    }

  data($event: any) {
    console.log($event)
  }
}
