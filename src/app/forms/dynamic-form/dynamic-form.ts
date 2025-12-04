import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormUtils } from '../utils'
import { JsonPipe } from '@angular/common'

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.html',
})
export class DynamicForm {
  formBuilder = inject(FormBuilder)
  formUtils = FormUtils

  form = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      [Validators.minLength(3)],
    ),
  })

  get favorites() {
    return this.form.controls.favorites
  }

  addFavorite() {
    this.form.controls.favorites.push(this.formBuilder.control('', [Validators.required]))
  }

  removeFavorite(index: number) {
    this.form.controls.favorites.removeAt(index)
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    // Save the data

    this.form.reset()
  }
}
