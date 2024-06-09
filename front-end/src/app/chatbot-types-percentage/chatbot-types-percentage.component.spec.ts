import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotTypesPercentageComponent } from './chatbot-types-percentage.component';

describe('ChatbotTypesPercentageComponent', () => {
  let component: ChatbotTypesPercentageComponent;
  let fixture: ComponentFixture<ChatbotTypesPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotTypesPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotTypesPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
