import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/interfaces/detail';
import { Ricette } from 'src/app/interfaces/ricette';
import { RicetteService } from 'src/app/services/ricette.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  dettagli: Detail | undefined;


  ngOnInit(): void {
    //  this._route.snapshot.params['id']

    this._route.params.subscribe(data => {
      this._service.getDettagliRicette(data[('id')]).subscribe(response => this.dettagli = response);
    });
  }

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: RicetteService) { }

}
