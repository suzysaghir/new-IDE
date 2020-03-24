const HeaderBarItem = require("sf-core/ui/headerbaritem");
const touch = require("sf-extension-utils/lib/touch");
const Image = require("sf-core/ui/image");
const PageTitleLayout = require("components/PageTitleLayout");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const Color = require("sf-core/ui/color");
const System = require("sf-core/device/system");

// Get generated UI code
import Page2Design from 'generated/pages/page2';

export default class Page2 extends Page2Design{
    // Constructor
    constructor() {
        // Initalizes super class for this page scope
        super();
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        this.btnSayHello.onPress = () => {
            alert("Hello World!");
        };
    }}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    const { routeData, headerBar } = this;
    superOnShow();
    headerBar.titleLayout.applyLayout();
    routeData && console.info(routeData.message);
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    var headerBar;
    superOnLoad();
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
    this.headerBar.setItems([new HeaderBarItem({
        title: "Option",
        onPress: () => {
            console.warn("You pressed Option item!");
        }
    })]);
    if (System.OS === "Android") {
        headerBar = this.headerBar;
        headerBar.setLeftItem(new HeaderBarItem({
            onPress: () => {
                this.router.goBack();
            },
            image: Image.createFromFile("images://arrow_back.png")
        }));
    }
    else {
        headerBar = this.parentController.headerBar;
    }
    headerBar.itemColor = Color.WHITE;
}


