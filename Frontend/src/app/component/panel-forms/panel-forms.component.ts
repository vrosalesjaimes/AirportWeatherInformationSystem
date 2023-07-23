import { Component, ViewChild } from '@angular/core';
import { Airport } from 'src/app/objects/airport';
import { FormComponent } from '../form/form.component';
import { DataSharingService } from 'src/app/service/data-sharing.service';
import { Router } from '@angular/router';

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

  originForm!: Airport;
  destinationForm!: Airport;

  constructor(private dataSharingService: DataSharingService,
              private router: Router){}

  handleResultForm1(result: Airport) {
    this.originForm = result;
    console.log(this.originForm)
  }

  handleResultForm2(result: Airport) {
    this.destinationForm = result;
    console.log(this.destinationForm)
  }

  areAllFieldsSelected() {
    const originForm = this.origin?.checkStatus();
    const destinationForm = this.destination?.checkStatus();
    return originForm && destinationForm;
  }

  sendData(){
    this.dataSharingService.setSharedData([this.originForm,this.destinationForm]);
    this.router.navigate(['/weather'])
    console.log('Si se termina de jecutar');
  }
}
