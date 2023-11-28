import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerToolFunctionComponent } from './container-tool-function.component';

describe('ContainerToolFunctionComponent', () => {
  let component: ContainerToolFunctionComponent;
  let fixture: ComponentFixture<ContainerToolFunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContainerToolFunctionComponent]
    });
    fixture = TestBed.createComponent(ContainerToolFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
