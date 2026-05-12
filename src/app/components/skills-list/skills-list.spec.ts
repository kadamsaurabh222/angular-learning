import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListComponent } from './skills-list';

describe('SkillsList', () => {
  let component: SkillsListComponent;
  let fixture: ComponentFixture<SkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
