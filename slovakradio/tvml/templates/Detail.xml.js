var Template = function() {
    var radioName = RadioPlayer.getRadioName();
    var data = RadioData[radioName]; // title, description
    var playListUrl = RadioData.getPlaylistUrl(radioName);
    var artworkImageURL = this.loader.imageUrl(radioName + ".png");
    var items = RadioPlaylist.getRenderedPlaylist(radioName);

    RadioPlaylist.refreshPlaylist(radioName); // refresh the radio playlist after 1 minute //

    return `<document>
   <compilationTemplate theme="light" id="template-data" data-radioName="${radioName}" data-template="Detail">
      <list>
         <relatedContent>
            <itemBanner>
               <heroImg src="${artworkImageURL}" />
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
            </itemBanner>
         </relatedContent>
         <header>
            <title>${data.title}</title>
         </header>
         <section>
            <description>${data.description}</description>
         </section>
         <section id="playlist">
            ${items}
         </section>
      </list>
   </compilationTemplate>
</document>`;
}
