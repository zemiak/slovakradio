import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    var appController: TVApplicationController?
    var config: Configuration?
    let resourceLoader = ResourceLoaderLocal()

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)

        let appControllerContext = TVApplicationControllerContext()
        let config = Configuration()
        let javascriptURL = ResourceLoaderLocal().mainUrl()
        print(javascriptURL)

        appControllerContext.javaScriptApplicationURL = javascriptURL!
        if let options = launchOptions {
            for (kind, value) in options {
                if let kindStr = kind as? String {
                    appControllerContext.launchOptions[kindStr] = value
                }
            }
        }

        appControllerContext.launchOptions["Version"] = config.getVersion() + (config.isDevelopment() ? " DEV" : "");
        appController = TVApplicationController(context: appControllerContext, window: self.window, delegate: self)
        
        return true
    }
}

extension AppDelegate: TVApplicationControllerDelegate {
    func appController(appController: TVApplicationController, evaluateAppJavaScriptInContext jsContext: JSContext) {
        // Add the resource loader here later...
        jsContext.setObject(ResourceLoaderLocal.self, forKeyedSubscript: "ResourceLoaderLocal")
    }
}
