import Foundation
import JavaScriptCore

@objc protocol JavascriptLoggerExport : JSExport {
    func log(text: String)
    static func create() -> JavascriptLoggerExport
}


@objc class JavascriptLogger: NSObject, JavascriptLoggerExport {
    func log(text: String) {
        print("Javascript: " + text);
    }

    static func create() -> JavascriptLoggerExport {
        return JavascriptLogger()
    }
}
