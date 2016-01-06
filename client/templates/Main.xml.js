var Template = function() { return `<document>
<showcaseTemplate mode="showcase">
    <background>
        <img src="${this.BaseUrl}images/background.jpg" width="1024" height="486" />
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
            <lockup action="RadioPlayer.play('slovensko')">
                <img src="${this.BaseUrl}images/slovensko.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('fm')">
                <img src="${this.BaseUrl}images/fm.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('junior')">
                <img src="${this.BaseUrl}images/junior.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('devin')">
                <img src="${this.BaseUrl}images/devin.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('regina-ba')">
                <img src="${this.BaseUrl}images/regina-ba.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('klasika')">
                <img src="${this.BaseUrl}images/klasika.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('regina-bb')">
                <img src="${this.BaseUrl}images/regina-bb.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('regina-ke')">
                <img src="${this.BaseUrl}images/regina-ke.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('litera')">
                <img src="${this.BaseUrl}images/litera.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('patria')">
                <img src="${this.BaseUrl}images/patria.png" width="440" height="242" />
            </lockup>

            <lockup action="RadioPlayer.play('')rsi">
                <img src="${this.BaseUrl}images/rsi.png" width="440" height="242" />
            </lockup>
        </section>
    </carousel>
</showcaseTemplate></document>
`;
}
