import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalRecipesComponent } from './regional-recipes.component';

describe('RegionalRecipesComponent', () => {
  let component: RegionalRecipesComponent;
  let fixture: ComponentFixture<RegionalRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
