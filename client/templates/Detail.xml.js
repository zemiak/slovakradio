var Template = function() {
    var radioName = RadioPlayer.getRadioName();
    var data = RadioData[radioName]; // title, description
    var playListUrl = RadioData.getPlaylistUrl(radioName);
    var artworkImageURL = Presenter.BaseUrl + "images/" + radioName + ".png";
    var itemTemplate = "<listItemLockup>"
        + "<ordinal minLength=\"2\">OOO</ordinal>"
        + "<title>TTT</title>"
        + "<decorationLabel>DDD</decorationLabel>"
        + "</listItemLockup>";
    var items = "";

    return `<document>
   <compilationTemplate theme="light">
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
         <section>
            ${items}
         </section>
      </list>
   </compilationTemplate>
</document>`;
}
