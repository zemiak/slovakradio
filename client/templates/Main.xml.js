var Template = function() { return `<document>
<showcaseTemplate mode="showcase">
    <background>
        <img src="${this.BaseUrl}images/background.jpg" width="1024" height="486" />
    </background>

    <banner>
        <row>
            <button template="Info">
                <text>Info</text>
            </button>

            <button template="Settings">
                <text>Nastavenia</text>
            </button>
        </row>
    </banner>

    <carousel>
        <section>
            <lockup radioName="slovensko">
                <img src="${this.BaseUrl}images/slovensko.png" width="440" height="242" />
            </lockup>

            <lockup radioName="fm">
                <img src="${this.BaseUrl}images/fm.png" width="440" height="242" />
            </lockup>

            <lockup radioName="junior">
                <img src="${this.BaseUrl}images/junior.png" width="440" height="242" />
            </lockup>

            <lockup radioName="devin">
                <img src="${this.BaseUrl}images/devin.png" width="440" height="242" />
            </lockup>

            <lockup radioName="regina-ba">
                <img src="${this.BaseUrl}images/regina-ba.png" width="440" height="242" />
            </lockup>

            <lockup radioName="klasika">
                <img src="${this.BaseUrl}images/klasika.png" width="440" height="242" />
            </lockup>

            <lockup radioName="regina-bb">
                <img src="${this.BaseUrl}images/regina-bb.png" width="440" height="242" />
            </lockup>

            <lockup radioName="regina-ke">
                <img src="${this.BaseUrl}images/regina-ke.png" width="440" height="242" />
            </lockup>

            <lockup radioName="litera">
                <img src="${this.BaseUrl}images/litera.png" width="440" height="242" />
            </lockup>

            <lockup radioName="patria">
                <img src="${this.BaseUrl}images/patria.png" width="440" height="242" />
            </lockup>

            <lockup radioName="rsi">
                <img src="${this.BaseUrl}images/rsi.png" width="440" height="242" />
            </lockup>
        </section>
    </carousel>
</showcaseTemplate></document>
`;
}
