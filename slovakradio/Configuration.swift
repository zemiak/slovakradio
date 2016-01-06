//
//  Configuration.swift
//  slovakradio
//
//  Created by Miroslav Vasko on 06/01/16.
//  Copyright © 2016 Miroslav Vasko. All rights reserved.
//

import Foundation

class Configuration {
    var config = [String: String]()

    init() {
        let configFileName = NSBundle.mainBundle().objectForInfoDictionaryKey("ConfigurationPlist") as! String
        let configFilePath = NSBundle.mainBundle().pathForResource(configFileName, ofType: "plist")!
        config = NSDictionary(contentsOfFile: configFilePath) as! [String: String]
    }

    func getBaseUrl() -> String {
        return config["BaseUrl"]!
    }

    func getEnvironment() -> String {
        return config["Environment"]!
    }

    func getVersion() -> String {
        return NSBundle.mainBundle().objectForInfoDictionaryKey("CFBundleShortVersionString") as! String
    }

    func isDevelopment() -> Bool {
        return "Development" == getEnvironment()
    }
}