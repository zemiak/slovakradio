/* global Presenter, resourceLoaderLocal, Mustache */

var Template = function() {
    var data = {version: Presenter.options.Version, dataVersion: RadioRepository.getVersion()};
    var template = resourceLoaderLocal.loadBundleResource("templates/Info.mustache");
    return Mustache.render(template, data);
}
