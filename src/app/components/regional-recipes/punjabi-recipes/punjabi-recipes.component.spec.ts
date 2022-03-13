import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabiRecipesComponent } from './punjabi-recipes.component';

describe('PunjabiRecipesComponent', () => {
  let component: PunjabiRecipesComponent;
  let fixture: ComponentFixture<PunjabiRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunjabiRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabiRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
