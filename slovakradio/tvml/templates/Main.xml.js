var Template = function() { return `<document>
<showcaseTemplate mode="showcase" id="template-data" data-template="Main">
    <background>
        <img src="${this.loader.imageUrl('background.jpg')}" width="1024" height="486" />
    </background>

    <banner>
        <row>
            <button action="Presenter.navigate('Settings')">
                <text>Nastavenia</text>
            </button>

            <button action="RadioPlayer.stop()">
                <text>Stop</text>
            </button>
        </row>
    </banner>

    <carousel>
        <section>
            <lockup action="RadioPlayer.setupDetail('slovensko')">
                <img src="${this.loader.imageUrl('slovensko.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('fm')">
                <img src="${this.loader.imageUrl('fm.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('junior')">
                <img src="${this.loader.imageUrl('junior.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('devin')">
                <img src="${this.loader.imageUrl('devin.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('regina-ba')">
                <img src="${this.loader.imageUrl('regina-ba.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('klasika')">
                <img src="${this.loader.imageUrl('klasika.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('regina-bb')">
                <img src="${this.loader.imageUrl('regina-bb.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('regina-ke')">
                <img src="${this.loader.imageUrl('regina-ke.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('litera')">
                <img src="${this.loader.imageUrl('litera.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('patria')">
                <img src="${this.loader.imageUrl('patria.png')}" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.setupDetail('rsi')">
                <img src="${this.loader.imageUrl('rsi.png')}" width="440" height="242" />
            </lockup>
        </section>
    </carousel>
</showcaseTemplate></document>
`;
}
