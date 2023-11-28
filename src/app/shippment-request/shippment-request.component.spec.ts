import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippmentRequestComponent } from './shippment-request.component';

describe('ShippmentRequestComponent', () => {
  let component: ShippmentRequestComponent;
  let fixture: ComponentFixture<ShippmentRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShippmentRequestComponent]
    });
    fixture = TestBed.createComponent(ShippmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
