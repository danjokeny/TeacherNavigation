/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

var application = require("application");

if (application.ios){
    var MyDelegate = (function (_super) {
        __extends(MyDelegate, _super);
        function MyDelegate() {
            _super.apply(this, arguments);
        }
        MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
            console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions);
            return true;
        };
        MyDelegate.prototype.applicationDidBecomeActive = function (application) {
            console.log("applicationDidBecomeActive: " + application);
        };
        MyDelegate.ObjCProtocols = [UIApplicationDelegate];
        return MyDelegate;
    })(UIResponder);
    application.ios.delegate = MyDelegate;
}

    application.on(application.launchEvent, function (args) {
        if (args.android) {
            // For Android applications, args.android is an android.content.Intent class.
            console.log("Launched Android application with the following intent: " + args.android + ".");
        } else if (args.ios !== undefined) {
            // For iOS applications, args.ios is NSDictionary (launchOptions).
            console.log("Launched iOS application with options: " + args.ios);
        }
    }); 


if (application.android) {
    application.android.on(application.AndroidApplication.activityCreatedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });
};

application.start({ moduleName: "views/home/home-page" });


/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
