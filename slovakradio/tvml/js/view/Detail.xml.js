var DetailTemplate = {
    width: 293,
    height: 161,

    renderRelated: function(radioName, data) {
        if (null == data.relation) {
            return "";
        }

        var items = "", relData, item;
        for (key of RadioRepository.getRelationData(data.relation)) {
            if (key === radioName) {
                continue;
            }

            relData = RadioRepository.getRadioData(key);
            item = `<lockup action="RadioPlayer.setupDetail('${key}')">
                <img src="${RadioRepository.getArtworkUrl(key)}" width="${DetailTemplate.width}" height="${DetailTemplate.height}" />
                <title>${relData.title}</title></lockup>`;
            items += item;
        }

        return items;
    }
};

var Template = function() {
    var radioName = RadioPlayer.getRadioName();
    var data = RadioRepository.getRadioData(radioName); // title, description
    var playListUrl = RadioRepository.getPlaylistUrl(radioName);
    var artworkImageURL = RadioRepository.getArtworkUrl(radioName);
    var items = RadioPlaylist.getRenderedPlaylist(radioName);
    var related = DetailTemplate.renderRelated(radioName, data);

    RadioPlaylist.refreshPlaylist(radioName); // refresh the radio playlist after 1 minute //

    var xml = `<document>
   <productTemplate id="template-data" data-radioName="${radioName}" data-template="Detail">
      <banner>
        <infoList>
          <info id="playlist">
            <header><title>Playlist</title></header>
            ${items}
          </info>
        </infoList>
        <stack>
            <title>${data.title}</title>
            <description allowsZooming="true" moreLabel="viac">${data.description}</description>
            <row>
                <buttonLockup action="RadioPlayer.play()">
                    <badge src="resource://button-play"/>
                    <title>Štart</title>
                </buttonLockup>

                <buttonLockup action="RadioPlayer.stop()">
                    <badge src="resource://button-more"/>
                    <title>Stop</title>
                </buttonLockup>
            </row>
        </stack>
        <heroImg src="${artworkImageURL}" />
      </banner>
      <shelf>
        <header><title>Podobné rádiá</title></header>
        <section>
            ${related}
        </section>
      </shelf>
   </productTemplate>
</document>`;
    return xml;
}
