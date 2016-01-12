/* global RadioRepository, resourceLoaderLocal, Mustache */

var Template = function() {
    var width = 293;
    var height = 161;

    var radioName = RadioPlayer.getRadioName();
    var data = RadioRepository.getRadioData(radioName);
    var template = resourceLoaderLocal.loadBundleResource("templates/Detail.mustache");


    var templateData = {
        "key": radioName,
        "playlist": RadioPlaylist.getPlaylist(radioName),
        "title": data.title,
        "description": data.description,
        "artwork": RadioRepository.getArtworkUrl(radioName),
        "collection": RadioRepository.getCollectionData(data.collection)["title"]
    };

    var related = [];
    if (null !== data.relation) {
        var relationData = RadioRepository.getRelationData(data.relation);
        for (var i in relationData) {
            var key = relationData[i];
            if (key === radioName) {
                continue;
            }

            var relData = RadioRepository.getRadioData(key);
            related.push({"key": key, "artwork": RadioRepository.getArtworkUrl(key), "width": width, "height": height, "title": relData.title});
        }
    }
    templateData.related = related;

    RadioPlaylist.refreshPlaylist(radioName); // refresh the radio playlist after 1 minute //
    return Mustache.render(template, templateData);
}
