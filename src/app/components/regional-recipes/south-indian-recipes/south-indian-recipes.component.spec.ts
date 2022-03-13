import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthIndianRecipesComponent } from './south-indian-recipes.component';

describe('SouthIndianRecipesComponent', () => {
  let component: SouthIndianRecipesComponent;
  let fixture: ComponentFixture<SouthIndianRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthIndianRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthIndianRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
