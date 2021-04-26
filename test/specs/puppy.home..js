const HomePage = require('../pageobjects/homepage.page');
const puppyDetailsPage = require('../pageobjects/puppyDetails.page');
const { IOS_CONFIG } = require('@wdio/cli/build/constants');
const chai = require('chai');


describe('Home page tests', () => {
    before(function() {
        // test data setup goes here.....
    });

    it('Home page title should display', () => {
        HomePage.open();
        chai.assert.equal(browser.getTitle(), 'Sally\'s Puppy Adoption Agency');     
    });

    it('search for a puppy', ()=> {
        HomePage.enterSearchItem("puppy");
        chai.assert.equal(HomePage.getSearchItem(), "puppy");
    })

    it('adopt the first puppy on the list', () => {
        (HomePage.viewDetailsList())[0].click();
        chai.assert.isTrue(puppyDetailsPage.returnToListLinkClickable());
    });

    after(function() {
        // clean up the test data setup
    });


});


