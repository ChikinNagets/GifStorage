import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsViewComponent } from './gifs-view.component';

describe('GifsViewComponent', () => {
  let component: GifsViewComponent;
  let fixture: ComponentFixture<GifsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
