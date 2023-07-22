import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFormsComponent } from './panel-forms.component';

describe('PanelFormsComponent', () => {
  let component: PanelFormsComponent;
  let fixture: ComponentFixture<PanelFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelFormsComponent]
    });
    fixture = TestBed.createComponent(PanelFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
