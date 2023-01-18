import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  public formCliente!: FormGroup;

  remaining!: number;
  maxlength: number = 400;

  phoneInputMask = createMask({ mask: '(99) 99999-9999', keepStatic: true });
  phoneFC = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FaleConoscoComponent>,
  ) { }

  ngOnInit(): void {
    this.createForm();

  }

  get f() { return this.formCliente.controls; }

  public createForm(){
    this.formCliente = new FormGroup({
      nome: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.formCliente.invalid) {
      return;
    }
  }

  public updateCount(value: string){
    this.remaining = this.maxlength - value.length;
  }

  public enviarEmail(){
  }


  

}
