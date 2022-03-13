import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratiRecipesComponent } from './gujarati-recipes.component';

describe('GujaratiRecipesComponent', () => {
  let component: GujaratiRecipesComponent;
  let fixture: ComponentFixture<GujaratiRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GujaratiRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GujaratiRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
