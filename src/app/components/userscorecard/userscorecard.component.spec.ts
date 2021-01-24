import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscorecardComponent } from './userscorecard.component';

describe('UserscorecardComponent', () => {
  let component: UserscorecardComponent;
  let fixture: ComponentFixture<UserscorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserscorecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
