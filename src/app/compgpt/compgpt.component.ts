import { PokemonService } from './../servgpt.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonToolbar, IonHeader, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-compgpt',
  standalone: true,
  imports: [IonTitle, IonHeader, IonToolbar, IonContent, NgFor, NgStyle, CommonModule],
  templateUrl: './compgpt.component.html',
  styleUrls: ['./compgpt.component.scss'],
})
export class CompgptComponent  implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(data =>{
      this.pokemons = data;
    })
  }

}
