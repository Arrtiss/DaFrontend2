import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRequestPageComponent } from './container-request-page.component';

describe('ContainerRequestPageComponent', () => {
  let component: ContainerRequestPageComponent;
  let fixture: ComponentFixture<ContainerRequestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContainerRequestPageComponent]
    });
    fixture = TestBed.createComponent(ContainerRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
