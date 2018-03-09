/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
var frameModule = require("ui/frame");
var HomeViewModel = require("./home-view-model");
var view = require("ui/core/view")

var homeViewModel = new HomeViewModel();
var page;

var animations = ["explode",
  "fade",
  "flipRight",
  "flipLeft",
  "slideLeft",
  "slideRight",
  "slideTop",
  "slideBottom"]

function pageLoaded(args) { 
  page = args.object;
  page.bindingContext = homeViewModel;
}

exports.pageLoaded = pageLoaded;

exports.OnNavigatingFrom = function(){
  console.log("OnNavigatingFrom");
}

exports.OnNavigatedFrom = function(){
  console.log("OnNavigatedFrom");
}

exports.OnUnloaded = function(){
  console.log("OnUnloaded")
}

exports.onAboutTap = function () {
  
  var someText = view.getViewById(page, "myTextField").text; 
  var animation = animations.indexOf(view.getViewById(page, "myAnimationTextField").text) > -1 ? view.getViewById(page, "myAnimationTextField").text : "fade";
  const navigationEntry = {
    moduleName: "views/about/about-page",
    context:  someText,
    animated: true,
    transition: { 
      name: animation
    }
  };

  frameModule.topmost().navigate(navigationEntry);
}

exports.onSettingsTap = function () {
  var context = { setting: "A setting value" };
  page.showModal('views/settings/settings-page', context, (mySetting) => {
    console.log("You entered: " + mySetting);
  }, true); 
}

