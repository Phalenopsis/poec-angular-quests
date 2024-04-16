import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopiaComponent } from './create-onomatopia.component';

describe('CreateOnomatopiaComponent', () => {
  let component: CreateOnomatopiaComponent;
  let fixture: ComponentFixture<CreateOnomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOnomatopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
