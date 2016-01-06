var Presenter = {
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },

    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },

    pushDocument: function(xml) {
        navigationDocument.pushDocument(xml);
    },

    load: function(event) {
        var ele = event.target;

        var action = ele.getAttribute("action");
        if (action) {
            eval(action);
        }
    },

    navigate: function(template) {
        resourceLoader.loadResource(Presenter.BaseUrl + "templates/" + template + ".xml.js", function(resource) {
            var doc = Presenter.makeDocument(resource);
            doc.addEventListener("select", Presenter.load.bind(Presenter));
            Presenter.pushDocument(doc);
        });
    }
}