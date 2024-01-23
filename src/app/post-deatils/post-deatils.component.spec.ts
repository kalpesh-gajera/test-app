import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeatilsComponent } from './post-deatils.component';

describe('PostDeatilsComponent', () => {
  let component: PostDeatilsComponent;
  let fixture: ComponentFixture<PostDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
