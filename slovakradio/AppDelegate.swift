//
//  AppDelegate.swift
//  slovakradio
//
//  Created by Miroslav Vasko on 31/12/15.
//  Copyright © 2015 Miroslav Vasko. All rights reserved.
//

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {

    var window: UIWindow?
    var appController: TVApplicationController?

    // static let BaseUrl = "http://localhost:9001/" // DEV setting. In the ${project}/client folder, run python -m SimpleHTTPServer 9001
    static let BaseUrl =  "http://zemiak.github.io/slovakradio/server/v1/" // PROD setting

    static let BootUrl = "\(AppDelegate.BaseUrl)js/application.js"

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)

        let appControllerContext = TVApplicationControllerContext()

        let javascriptURL = NSURL(string: AppDelegate.BootUrl)

        appControllerContext.javaScriptApplicationURL = javascriptURL!
        if let options = launchOptions {
            for (kind, value) in options {
                if let kindStr = kind as? String {
                    appControllerContext.launchOptions[kindStr] = value
                }
            }
        }

        appControllerContext.launchOptions["BaseUrl"] = AppDelegate.BaseUrl
        self.appController = TVApplicationController(context: appControllerContext, window: self.window, delegate: self)

        return true
    }

    func applicationWillResignActive(application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(application: UIApplication) {
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }


}

