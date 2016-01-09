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

    replaceDocument: function(xml) {
        navigationDocument.replaceDocument(xml);
    },

    load: function(event) {
        var ele = event.target;

        var action = ele.getAttribute("action");
        if (action) {
            eval(action);
        }
    },

    getDocumentFromTemplate: function(template) {
        var template = resourceLoaderLocal.loadBundleResource(template);
        eval(template);
        var res = Template.call(this);
        var doc = Presenter.makeDocument(res);
        doc.addEventListener("select", Presenter.load.bind(Presenter));

        return doc;
    },

    navigate: function(template) {
        var doc = Presenter.getDocumentFromTemplate(template);
        Presenter.pushDocument(doc);
    },

    navigateReplace: function(template) {
        var doc = Presenter.getDocumentFromTemplate(template);
        Presenter.replaceDocument(doc);
    },

    getDocumentName: function() {
        var ele = Presenter.getDocumentDataElement()
        return ele.getAttribute("data-template");
    },

    getDocumentDataElement: function() {
        return document.getElementById("template-data");
    }
}
