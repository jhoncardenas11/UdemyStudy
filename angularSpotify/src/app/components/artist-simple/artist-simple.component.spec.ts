import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSimpleComponent } from './artist-simple.component';

describe('ArtistSimpleComponent', () => {
  let component: ArtistSimpleComponent;
  let fixture: ComponentFixture<ArtistSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
