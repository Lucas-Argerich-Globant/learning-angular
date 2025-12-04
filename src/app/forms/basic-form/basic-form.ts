import { JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-basic-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './basic-form.html',
})
export class BasicForm {
  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
  })
}
