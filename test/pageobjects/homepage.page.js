const Page = require('./page');

class HomePage extends Page {
    get titleText() { return $("//span[text()='Home of the ']")}
    get searchTextbox() { return $("[name='search']")}
    get getViewDetails() { return $$("[value='View Details']")}

    getPageTitle() {
        return this.titleText;
    }

    viewDetailsList() {
        return this.getViewDetails;
    }

    enterSearchItem(item) {
        this.searchTextbox.waitForEnabled({ timeout: 10000 }, {interval: 1000});
        this.searchTextbox.setValue(item);
    }

    getSearchItem() {
        this.searchTextbox.waitForEnabled({ timeout: 10000 }, {interval: 1000});
        return this.searchTextbox.getValue();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
