const Page = require('./page');

class puppyDetailsPage extends Page {
    get returnToListLink() { return $("//a[text()='Return to List']")}

    returnToListLinkClickable () {
        return this.returnToListLink.waitForClickable({ timeout: 10000 }, {interval: 1000});
    }
}

module.exports = new puppyDetailsPage();
