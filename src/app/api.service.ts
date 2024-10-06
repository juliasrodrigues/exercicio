import { Injectable } from '@angular/core';
import { PokemonClient, PokemonStat } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /* data: any[] =[]; */
  
  constructor() { 

    /* let mon: string[] = [];
    let info: any = []; */
    const api = new PokemonClient();

    for(let i = 1; i <= 152; i++){
    (async()=>{
      /* let pname = '';
      let stats: any = [];
      let id = ''; */
  
      /* await api
      .getPokemonById(i)
      .then((data)=> console.log(data.name))
      .catch((error)=> console.log(error)); */
      
      /* await api
      .getPokemonById(i)
      .then((data)=>{
        id = data.id.toString();
        pname = data.name,
        stats = data.stats.toString(); */

        
        await api
        .getPokemonById(i)
        .then((data)=>{
          
          let id = data.id.toString();
          let name = data.name;
          let st = data.stats;
          
          let pmon: any = [
            id,
            name,
            st
          ];
          console.log(pmon);
        })
      
      /* let novostat = {
        id:id.toString(),
        nome:pname,
        stat:stats
      };
      info.push(novostat); */
      
      
    })();
    /* console.log(info); */
  }

}

}
