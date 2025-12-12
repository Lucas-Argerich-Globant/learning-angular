import { JsonPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormUtils } from '../utils'

// Cual
@Component({
  selector: 'app-advanced-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './advanced-form.html',
})
export class AdvancedForm {
  // Simpler option for FormGroup/FormControllers definition
  formBuilder = inject(FormBuilder)
  formUtils = FormUtils

  form = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(10)]],
    quantity: [null, [Validators.required, Validators.min(1)]],
  })

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    // Save the data

    this.form.reset()
  }
}
