import { Component, ViewChild } from '@angular/core';
import { Airport } from 'src/app/objects/airport';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-panel-forms',
  templateUrl: './panel-forms.component.html',
  styleUrls: ['./panel-forms.component.css']
})
export class PanelFormsComponent {
  originTitle: string = 'Origin Airport';
  destinationTitle: string = 'Destination Airport';

  @ViewChild('origin') origin!: FormComponent;
  @ViewChild('destination') destination!: FormComponent;

  resultForm1!: Airport;
  resultForm2!: Airport;

  handleResultForm1(result: Airport) {
    this.resultForm1 = result;
    console.log(this.resultForm1)
  }

  handleResultForm2(result: Airport) {
    this.resultForm2 = result;
    console.log(this.resultForm2)
  }

  areAllFieldsSelected() {
    const originForm = this.origin?.checkStatus();
    const destinationForm = this.destination?.checkStatus();
    return originForm && destinationForm;
  }
}
