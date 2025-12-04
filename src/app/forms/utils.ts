import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms'

export class FormUtils {
  static isValidField(control: AbstractControl): boolean {
    return !!control && !(control.errors && control.touched)
  }

  static getFieldError(control: AbstractControl): string {
    const errors = control.errors

    if (!errors) return 'Control not found.'

    // Show only first error
    switch (Object.keys(errors)[0]) {
      case 'required': {
        return 'Required field.'
      }
      case 'minlength': {
        return 'Minimum length of ' + errors['minlength'].requiredLength
      }
      case 'min': {
        return 'Minimum value of ' + errors['min'].min
      }
      default: {
        return ''
      }
    }
  }
}
