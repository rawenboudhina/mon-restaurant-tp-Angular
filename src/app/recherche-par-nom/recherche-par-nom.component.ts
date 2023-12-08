import { PlatService } from './../../../mon-restaurant-tp-Angular/src/app/services/plat.service';
import { Component } from '@angular/core';
import { Plat } from '../model/plat.model';
import { SearchFilterPipe } from './search-filter.pipe';


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
  plats:Plat[]=[];
  nomPlat!:String;
  // allplats:plats[]=[];

  searchTerm!:string;
  constructor(private PlatService: PlatService) {}
  ngOnInit(): void {
    
    this.plats=this.PlatService.listePlats();
    // this.allplats=this.plats;

    }}
    
 /*    onChange() {
      this.plats = this.PlatService.rechercherParNom(this.searchTerm);
      console.log('Filtered plats:', this.plats);
    }
    onKeyUp(filterText : string){ this.plats = this.plats.filter(item => item.nomPlat.toLowerCase().includes(filterText)); }
    */