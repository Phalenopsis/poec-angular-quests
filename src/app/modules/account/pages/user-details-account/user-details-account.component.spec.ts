import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsAccountComponent } from './user-details-account.component';

describe('UserDetailsAccountComponent', () => {
  let component: UserDetailsAccountComponent;
  let fixture: ComponentFixture<UserDetailsAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
