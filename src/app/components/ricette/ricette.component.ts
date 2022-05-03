import { Component, OnInit } from '@angular/core';
import { Ricette } from 'src/app/interfaces/ricette';
import { RicetteService } from 'src/app/services/ricette.service';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css']
})
export class RicetteComponent implements OnInit {

  ricette: Ricette[] = [];
  constructor(private _service: RicetteService) { }

  ngOnInit(): void {
    this._service.getAllRicette().subscribe(
      (data: any) => {
        this.ricette = data;
      })
  }

}
