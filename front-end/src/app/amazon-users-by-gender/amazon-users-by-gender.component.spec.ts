import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonUsersByGenderComponent } from './amazon-users-by-gender.component';

describe('AmazonUsersByGenderComponent', () => {
  let component: AmazonUsersByGenderComponent;
  let fixture: ComponentFixture<AmazonUsersByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonUsersByGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonUsersByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
