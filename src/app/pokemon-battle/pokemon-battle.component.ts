import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.scss']
})
export class PokemonBattleComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('victory-icon',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/checked-circle.svg'));
    iconRegistry.addSvgIcon('defeat-icon',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/unchecked-circle.svg'));
    iconRegistry.addSvgIcon('tie-icon',sanitizer.bypassSecurityTrustResourceUrl('assets/icon/tie-circle.svg'));
   }

  ngOnInit(): void {
  }

}
