import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character';

@Injectable()
export class BSService{
    constructor(){
        console.log('Servicio iniciado');
    }

    private _personajes:Character[] = [ //_ porque no se pueden llamar igual propiedad y método
        {name:"Shelly", health:3600},
        {name:"Jessie", health:3000},
        {name:"Colt", health:2800},
        {name:"Shandy", health:1001},
        {name:"Nita", health:1000},
        {name:"Spike", health:980}
    ]

    get personajes():Character[] {
        return [...this._personajes]; //devuelve una copia
    }

    annadir(character:Character){
        this._personajes.push(character);
    }

    borrar(name:String){
        let borrado:boolean = false;
        for(let i = 0; i< this._personajes.length; i++){
            if(borrado == false){
                if(this._personajes[i].name == name ){
                    this._personajes.slice(i,1);
                    borrado = true;
                }
            }
        }
    }

}