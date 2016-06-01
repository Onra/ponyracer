"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var pony_component_1 = require('./pony.component');
testing_1.describe('Component: Pony', function () {
    var fixture;
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) { return tcb.createAsync(pony_component_1.PonyComponent).then(function (f) { return fixture = f; }); }));
    testing_1.it('should have method to get the image URL', function () {
        // given a pony component with a PURPLE pony
        var ponyComponent = new pony_component_1.PonyComponent();
        ponyComponent.ponyModel = { name: 'Fast Rainbow', color: 'PURPLE' };
        // when we call the method for the URL
        var url = ponyComponent.getPonyImageUrl();
        // then we should have a nice URL
        testing_1.expect(url).toBe('app/pony/pony-purple.gif');
    });
    testing_1.it('should display an image and a legend', function () {
        // given a pony component with a PURPLE pony
        var ponyComponent = fixture.componentInstance;
        ponyComponent.ponyModel = { name: 'Fast Rainbow', color: 'PURPLE' };
        // when we trigger the change detection
        fixture.detectChanges();
        // then we should have an image and a legend
        var element = fixture.nativeElement;
        var image = element.querySelector('img');
        testing_1.expect(image.getAttribute('src')).toBe('app/pony/pony-purple.gif');
        testing_1.expect(image.getAttribute('alt')).toBe('Image for Fast Rainbow');
        var legend = element.querySelector('legend');
        testing_1.expect(legend).toHaveText('Fast Rainbow');
    });
    testing_1.it('should emit an event on click', function () {
        // given a pony component with a PURPLE pony
        var ponyComponent = fixture.componentInstance;
        ponyComponent.ponyModel = { name: 'Fast Rainbow', color: 'PURPLE' };
        ponyComponent.ponyClicked.subscribe(function (pony) {
            testing_1.expect(pony).toBe(ponyComponent.ponyModel);
        });
        // when we click on the element
        fixture.detectChanges();
        var element = fixture.nativeElement;
        element.querySelector('div').dispatchEvent(new Event('click'));
    });
});
//# sourceMappingURL=pony.component.spec.js.map