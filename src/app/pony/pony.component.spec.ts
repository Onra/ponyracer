import {
  beforeEach,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { PonyComponent } from './pony.component';

describe('Component: Pony', () => {

  let fixture: ComponentFixture<PonyComponent>;

  beforeEach(inject([TestComponentBuilder],
    (tcb: TestComponentBuilder) => tcb.createAsync(PonyComponent).then(f => fixture = f)
  ));

  it('should have method to get the image URL', () => {
    // given a pony component with a PURPLE pony
    let ponyComponent: PonyComponent = new PonyComponent();
    ponyComponent.ponyModel = {name: 'Fast Rainbow', color: 'PURPLE'};

    // when we call the method for the URL
    let url = ponyComponent.getPonyImageUrl();

    // then we should have a nice URL
    expect(url).toBe('app/pony/pony-purple.gif');
  });

  it('should display an image and a legend', () => {
    // given a pony component with a PURPLE pony
    let ponyComponent: PonyComponent = fixture.componentInstance;
    ponyComponent.ponyModel = {name: 'Fast Rainbow', color: 'PURPLE'};

    // when we trigger the change detection
    fixture.detectChanges();

    // then we should have an image and a legend
    let element = fixture.nativeElement;
    let image = element.querySelector('img');
    expect(image.getAttribute('src')).toBe('app/pony/pony-purple.gif');
    expect(image.getAttribute('alt')).toBe('Image for Fast Rainbow');
    let legend = element.querySelector('legend');
    expect(legend).toHaveText('Fast Rainbow');
  });

  it('should emit an event on click', () => {
    // given a pony component with a PURPLE pony
    let ponyComponent: PonyComponent = fixture.componentInstance;
    ponyComponent.ponyModel = {name: 'Fast Rainbow', color: 'PURPLE'};

    ponyComponent.ponyClicked.subscribe((pony) => {
      expect(pony).toBe(ponyComponent.ponyModel);
    });

    // when we click on the element
    fixture.detectChanges();

    let element = fixture.nativeElement;
    element.querySelector('div').dispatchEvent(new Event('click'));
  });

});
