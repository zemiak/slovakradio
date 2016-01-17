# :RADIO RTVS

A totally unofficial Slovakia Radios radio player for AppleTV 4.

Artwork has been taken from a SITA (Slovak Press Agency), RTVS and respective radio sites.

License: BSD

## Project Type
This project uses TVML/TVJS for presentation and small Swift helpers to load resources locally from bundle and logging.
Traditionally, you need a web server to server the TVML/TVJS/images. This project, thanks to https://github.com/sammyd/StandaloneTVML, uses local file links and local resource loading via a small Swift helper class.

## Running
Until this gets released in the App Store, it is a little bit complicated.
You have to build the project and deploy it to the AppleTV via a USB-C cable.
See http://9to5mac.com/2015/06/10/xcode-7-allows-anyone-to-download-build-and-sideload-ios-apps-for-free/ and http://bouk.co/blog/sideload-iphone/
