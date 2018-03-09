var view = require("ui/core/view")

var page;

let context; 
var closeCallback;
exports.onShownModally = function (args) {
    console.log('onShowModally');
    page = args.object;
    context = args.context;
    closeCallback = args.closeCallback;
    console.log("Context: ", context.setting);
    view.getViewById(page, "mySetting").text = context.setting;
}

exports.onLoaded = function(){
    console.log('onLoaded');
}

exports.unloaded = function () {
    console.log(unloaded);
}

exports.onSaveSettingsTap = function () {
    console.log('onSaveSettingsTap')
    var aSetting = view.getViewById(page, "mySetting").text; 
    closeCallback(aSetting);
}