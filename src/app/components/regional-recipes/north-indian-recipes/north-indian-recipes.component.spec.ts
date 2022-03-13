import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthIndianRecipesComponent } from './north-indian-recipes.component';

describe('NorthIndianRecipesComponent', () => {
  let component: NorthIndianRecipesComponent;
  let fixture: ComponentFixture<NorthIndianRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthIndianRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthIndianRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
