/* global Presenter, resourceLoaderLocal, Mustache */

var Template = function() {
    var data = {version: Presenter.options.Version};
    var template = resourceLoaderLocal.loadBundleResource("templates/Info.mustache");
    return Mustache.render(template, data);
}
