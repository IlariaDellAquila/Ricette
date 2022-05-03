import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from 'src/app/interfaces/detail';
import { Ricette } from 'src/app/interfaces/ricette';
import { RicetteService } from 'src/app/services/ricette.service';

@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrls: ['./ricetta.component.css']
})
export class RicettaComponent implements OnInit {

  @Input('r') ricetta: Ricette | undefined;
  // @Output('dettaglio') dettaglio = new EventEmitter();
  // @Output('eliminaRicetta') eliminaRicetta = new EventEmitter();
  // ricetta: Ricette | undefined;
  showModalDelete: boolean = false;

  constructor(private _service: RicetteService, private _router: Router) { }

  ngOnInit(): void {
  }

  // dettagli(id:string | undefined){
  //  this.dettaglio.emit(id);
  // }

  // elimina(id:string | undefined){
  //  this.eliminaRicetta.emit(id);
  // }

  showDetail(ricetta: Ricette) {
    this._router.navigate(['dettagli' + ricetta?._id]);
  }

  close(){
    this.showModalDelete = false;
  }

  elimina(id: string | undefined) {
    this.showModalDelete = true;
  }

  deleteRecip(id:string | any) {
    this.showModalDelete = false;
    this._service.deleteRicette(id).subscribe(data => {
      window.location.reload()
    })

  }

}


