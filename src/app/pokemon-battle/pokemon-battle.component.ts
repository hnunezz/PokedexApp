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


  public Popup1:boolean = false;
  public Popup2:boolean = false;

  public Pokemons : Pokemon[] = [];
  public Pokemon1!:Pokemon
  public Pokemon2!:Pokemon

  public result_victory!:number;
  public result_defeat!:number;
  public result_tie!:number;


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
      if(Pokemon1.stats[1].base_stat == Pokemon2.stats[1].base_stat)
        {
          this.result_tie = 5
        }
      else if(Pokemon1.stats[1].base_stat > Pokemon2.stats[1].base_stat)
        {
          this.result_victory = 1;
          this.result_defeat = 2
        }
      else
        {
          this.result_victory = 3;
          this.result_defeat = 4
        }
    }

  data($event: any) {
    console.log($event)
    
    this.result_victory = 0
    this.result_defeat = 0
    this.result_tie = 0
  }
}
