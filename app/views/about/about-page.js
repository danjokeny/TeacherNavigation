var frameModule = require("ui/frame");
var view = require("ui/core/view")

exports.pageLoaded = function (args) {
    console.log('pageLoaded')
    const page = args.object;
    const context = page.navigationContext;
    view.getViewById(page, "myLabel").text = context; 
    console.log(context.info);
}

exports.OnNavigatingTo = function(){
    console.log("OnNavigatingTo")
  }

  exports.OnNavigatedTo = function(){
    console.log("OnNavigatedTo")
  }

exports.onGoHomeTap = function () {
    frameModule.topmost().goBack();
}