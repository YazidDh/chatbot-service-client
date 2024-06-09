import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersByGenderComponent } from './users-by-gender.component';

describe('UsersByGenderComponent', () => {
  let component: UsersByGenderComponent;
  let fixture: ComponentFixture<UsersByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersByGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
