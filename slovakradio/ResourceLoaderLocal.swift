//
//  ResourceLoaderLocal.swift
//  StandaloneTVML
//
//  Created by Sam Davies on 23/10/2015.
//  Copyright © 2015 Razeware. All rights reserved.
//  MIT License
//
//  Modified by zemiak
//

import Foundation
import JavaScriptCore


@objc protocol ResourceLoaderLocalExport : JSExport {
    func loadBundleResource(name: String) -> String
    func imageUrl(name: String) -> String
    func scriptUrl(name: String) -> String
    static func create() -> ResourceLoaderLocalExport
}


@objc class ResourceLoaderLocal: NSObject, ResourceLoaderLocalExport {

    func loadBundleResource(name: String) -> String {
        let path = NSBundle.mainBundle().pathForResource("tvml/" + name, ofType: nil)
        let fileContent: String
        do {
            fileContent = try String(contentsOfFile: path!, encoding: NSUTF8StringEncoding)
        } catch {
            print("There was a problem")
            return ""
        }
        return fileContent
    }

    func imageUrl(name: String) -> String {
        return getResourceUrl(name, folder: "images")
    }

    func scriptUrl(name: String) -> String {
        return getResourceUrl(name, folder: "js")
    }

    func mainUrl() -> NSURL? {
        let fullUrl = "tvml/js/application.js"
        if let url = NSBundle.mainBundle().URLForResource(fullUrl, withExtension: nil) {
            print("Found: " + url.absoluteString)
            return url
        }

        print("Did not find:" + fullUrl)
        return nil
    }

    func getResourceUrl(name: String, folder: String) -> String {
        let fullUrl = "tvml/" + folder + "/" + name
        if let url = NSBundle.mainBundle().URLForResource(fullUrl, withExtension: nil) {
            print("Found: " + url.absoluteString)
            return url.absoluteString
        }

        print("Did not find:" + fullUrl)
        return ""
    }

    static func create() -> ResourceLoaderLocalExport {
        return ResourceLoaderLocal()
    }
}
