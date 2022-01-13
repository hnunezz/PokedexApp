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
  public P1!:Pokemon
  public P2!:Pokemon
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
 

    battle1(P1:number){
      this.P1 = this.pokemon;
    }

    battle2(){
      this.P2 = this.pokemon
    }

  lutar(P1:Pokemon,P2:Pokemon){
      if(P1.atk == P2.atk)
        {
          this.result_tie = 1
          console.log("Empate")
        }
      else if(P1.atk > P2.atk)
        {
          this.result_victory1 = 1
          this.result_victory2 = 0
          console.log("vitoria1",P2)
        }
      else
        {
          this.result_victory1 = 0
          this.result_victory2 = 1

          console.log("vitoria2",P2)
        }
    }

  data($event: any) {
    console.log($event)
  }
}
