import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripadvisorUsersByGenderComponent } from './tripadvisor-users-by-gender.component';

describe('TripadvisorUsersByGenderComponent', () => {
  let component: TripadvisorUsersByGenderComponent;
  let fixture: ComponentFixture<TripadvisorUsersByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripadvisorUsersByGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripadvisorUsersByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
