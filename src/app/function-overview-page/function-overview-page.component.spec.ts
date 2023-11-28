import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionOverviewPageComponent } from './function-overview-page.component';

describe('FunctionOverviewPageComponent', () => {
  let component: FunctionOverviewPageComponent;
  let fixture: ComponentFixture<FunctionOverviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FunctionOverviewPageComponent]
    });
    fixture = TestBed.createComponent(FunctionOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
