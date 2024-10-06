import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-poke',
  standalone: true,
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.scss'],
})
export class PokeComponent  implements OnInit {

  constructor(private service: ApiService) {

   }

  ngOnInit() {}

}
