
import { Stylecuisine } from "./stylecuisine.model";
export class Plat {
    idPlat? : number;
    nomPlat? : string;
    prixPlat? : number;
     dateCreation? : Date ;
     stylecuisine!: Stylecuisine ;
    }