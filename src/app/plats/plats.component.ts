import { Component } from '@angular/core';
import { Plat } from '../model/plat.model';
import { PlatService } from '../services/plat.service';
import { AuthService } from '../services/auth.service';
import { stylecuisine } from 'mon-restaurant-tp-Angular/src/app/model/stylecuisine.model';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
})
export class PlatsComponent {
  plats : Plat[];
  idStyle: number = 0;
 styles!:stylecuisine[];

    constructor(private platService: PlatService,
                public authService: AuthService )  {
      this.plats=platService.listePlats();
      }
      ngOnInit(): void {
        this.plats = this.platService.listePlats();
        this.styles=this.platService.listestylecuisines();
        
      }

        /*this.platService.listePlat().subscribe(pls => {
        console.log(pls);
        this.plats = pls;
        });
        } */
  supprimerPlat(p: Plat)
{
//console.log(p);
    let conf = confirm("Etes-vous sûr ?");
         if (conf)        
          this.platService.supprimerPlat(p);
 }
}
