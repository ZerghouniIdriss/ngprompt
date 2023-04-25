import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpromptComponent } from './ngprompt.component';

describe('NgpromptComponent', () => {
  let component: NgpromptComponent;
  let fixture: ComponentFixture<NgpromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgpromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
