import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConversationShowcaseComponent } from './chat-conversation-showcase.component';

describe('ChatConversationShowcaseComponent', () => {
  let component: ChatConversationShowcaseComponent;
  let fixture: ComponentFixture<ChatConversationShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatConversationShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatConversationShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
