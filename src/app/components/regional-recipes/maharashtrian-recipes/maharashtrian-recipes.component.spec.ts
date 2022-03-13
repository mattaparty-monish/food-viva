import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharashtrianRecipesComponent } from './maharashtrian-recipes.component';

describe('MaharashtrianRecipesComponent', () => {
  let component: MaharashtrianRecipesComponent;
  let fixture: ComponentFixture<MaharashtrianRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaharashtrianRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaharashtrianRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
