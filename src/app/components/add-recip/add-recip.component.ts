import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ricette } from 'src/app/interfaces/ricette';
import { RicetteService } from 'src/app/services/ricette.service';

@Component({
  selector: 'app-add-recip',
  templateUrl: './add-recip.component.html',
  styleUrls: ['./add-recip.component.css']
})
export class AddRecipComponent implements OnInit {

  form : FormGroup;
  ricette: Ricette[] = [];

  constructor(private _service: RicetteService, private _router: Router, fb: FormBuilder) { 
    this.form = fb.group ({
      descrizione : ['', Validators.required],
      difficolta :['', Validators.required],
      img: ['', Validators.required],
      imgs: fb.array([]),
      ingredienti :fb.array([]),
      descrizioneIngrediente : ['', Validators.required],
      quantitaIngrediente : ['', Validators.required],
      procedimento : ['', Validators.required]


  })
  }

  ngOnInit(): void {
  }


  createRecip(form: FormGroup) {
    delete form.value.descrizioneIngrediente;
    delete form.value.quantitaIngrediente;
    this._service.addRicetta(form.value).subscribe((data:any) => {
      this.ricette.push(data)
      this._router.navigate(['']);
    })


  }

  get descrizione(){
    return this.form?.get('descrizione')
  }
  get difficolta(){
    return this.form?.get('difficolta')
  }
  get img(){
    return this.form?.get('img')
  }
  get procedimento(){
    return this.form?.get('procedimento')
  }

  get imgs(){
    return this.form?.get('imgs') as FormArray
  }
  get ingredienti(){
    return this.form?.get('ingredienti') as FormArray
  }
  get descrizioneIngrediente(){
    return this.form?.get('descrizioneIngrediente')
  }
  get quantitaIngrediente(){
    return this.form?.get('quantitaIngrediente')
  }

  addImages(images: any){
   (this.form?.get('imgs') as FormArray).push(new FormControl(images.value));
   images.value="";
  }

  addIngredienti(ingredienti: any){
    (this.form?.get('ingredienti') as FormArray).push(new FormControl(ingredienti.value))
   }
}
