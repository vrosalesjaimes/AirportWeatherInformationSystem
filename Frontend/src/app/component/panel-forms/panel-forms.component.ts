import { Component } from '@angular/core';
import { Airport } from 'src/app/objects/airport';

@Component({
  selector: 'app-panel-forms',
  templateUrl: './panel-forms.component.html',
  styleUrls: ['./panel-forms.component.css']
})
export class PanelFormsComponent {
  originTitle: string = 'Origin Airport';
  destinationTitle: string = 'Destination Airport';

  resultForm1!: Airport;
  resultForm2!: Airport;

  handleResultForm1(result: Airport) {
    this.resultForm1 = result;
  }

  handleResultForm2(result: Airport) {
    this.resultForm2 = result;
  }
}
