<<<<<<< HEAD
import { Component } from '@angular/core';
import { PlatService } from '../services/plat.service';
=======
import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { Plat } from '../model/plat.model';
import { Stylecuisine } from '../model/stylecuisine.model';

>>>>>>> 9fd6c1f36cd3aa36af0d758e94123a50cf80686b

@Component({
  selector: 'app-recherche-par-style',
  templateUrl: './recherche-par-style.component.html',
})
<<<<<<< HEAD
export class RechercheParStyleComponent {
  constructor(private PlatService:PlatService){}
  idstyle!:number;
ngOnInit():void{}
=======
export class RechercheParStyleComponent implements OnInit {
  idstyle!: number;
  plats!: Plat[];
  stylecuisines!: Stylecuisine[];

  constructor(private platService: PlatService) {}

  ngOnInit(): void {
    this.stylecuisines = this.platService.listestylecuisines();
  }

  onChange(): void {
    this.plats = this.platService.rechercherParStyle(this.idstyle);
  }
>>>>>>> 9fd6c1f36cd3aa36af0d758e94123a50cf80686b
}
