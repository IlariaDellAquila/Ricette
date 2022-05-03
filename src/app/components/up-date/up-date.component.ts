import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/interfaces/detail';
import { Ricette } from 'src/app/interfaces/ricette';
import { RicetteService } from 'src/app/services/ricette.service';

@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.css']
})
export class UpDateComponent implements OnInit {
  upDateForm: any;
  ricetta: Detail | undefined;

  constructor(private _service: RicetteService,  private _router: Router, private _route: ActivatedRoute) { }


  ngOnInit(): void {
    this._route.params.subscribe(data => {
      this._service.getDettagliRicette(data[('id')]).subscribe(response =>{ 
        this.ricetta = response
        this.upDateForm = new FormGroup({
          'descrizione' : new FormControl(this.ricetta?.descrizione),
          'difficolta' : new FormControl(this.ricetta?.difficolta),
          'img': new FormControl(this.ricetta?.img),
          'imgs': new FormArray( []),
          'ingredienti' : new FormArray([]),
          'procedimento' : new FormControl(this.ricetta?.procedimento)
      
      
        })

        this.ricetta?.imgs?.forEach((f: any) => {
          (this.upDateForm.get('imgs') as FormArray).push(new FormControl(f))
        })
    
        this.ricetta?.ingredienti?.forEach((i: any) => {
          (this.upDateForm.get('ingredienti') as FormArray).push(new FormControl(i))
        })
      
      });
    });
    



  }


  upD(ind: number, e:any){
    (this.upDateForm.get('imgs') as FormArray).at(ind).setValue(e.target.value)
  }

  upDa(inde: number, event: any){
   (this.upDateForm.get('ingredienti') as FormArray).at(inde).setValue({...(this.upDateForm.get('ingredienti') as FormArray).at(inde).value, descrizione: event.target.value})
  }

  upDat(inde:number, ev: any){
    (this.upDateForm.get('ingredienti') as FormArray).at(inde).setValue({...(this.upDateForm.get('ingredienti') as FormArray).at(inde).value, quantita: ev.target.value})
  }

  upDateRecip(upDateForm: FormGroup){
    delete upDateForm.value.descrizioneIngrediente;
    delete upDateForm.value.quantitaIngrediente;
    upDateForm.value['_id'] = this.ricetta?._id;

    this._service.modificaRicetta(upDateForm.value).subscribe(data => {
      this.ricetta = data
      this._router.navigate(['dettagli/' +this.ricetta?._id])
    });
  }
}
