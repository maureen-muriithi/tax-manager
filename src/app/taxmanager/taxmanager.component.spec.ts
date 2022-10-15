import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxmanagerComponent } from './taxmanager.component';

describe('TaxmanagerComponent', () => {
  let component: TaxmanagerComponent;
  let fixture: ComponentFixture<TaxmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
