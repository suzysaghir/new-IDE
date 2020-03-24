import touch = require("sf-extension-utils/lib/touch");
import componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
import PageTitleLayout from "components/PageTitleLayout";

import System = require("sf-core/device/system");

// Get generated UI code
import Page1Design from "generated/pages/page1"; // this is wrong, should be import

export default class Page1 extends Page1Design{
    // Constructor
    router: any;
    constructor() {
        // Initalizes super class for this page scope
        super();
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        this.btnNext.onPress = () => {
            this.router.push("/pages/page2", { message: "Hello World!" });
        };
    }}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    superOnShow();
    this.headerBar.titleLayout.applyLayout();
}
/**
 * 
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
    this.headerBar.leftItemEnabled = false;
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
    if (System.OS === "Android") {
        this.headerBar.title = "";
    }
}

