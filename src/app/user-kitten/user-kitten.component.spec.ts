import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKittenComponent } from './user-kitten.component';

describe('UserKittenComponent', () => {
  let component: UserKittenComponent;
  let fixture: ComponentFixture<UserKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserKittenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
