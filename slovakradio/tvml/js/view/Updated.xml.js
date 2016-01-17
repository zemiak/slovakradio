/* global Presenter, resourceLoaderLocal, Mustache */

var Template = function() {
    var data = {motd: RadioData.version.motd};
    var template = resourceLoaderLocal.loadBundleResource("templates/Updated.mustache");
    return Mustache.render(template, data);
}
