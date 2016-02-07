var DataUpdater = {
    URL: "http://zemiak.github.io/slovakradio/update/v1/data.json",

    check: function() {
        RadioData = ApplicationStorage.get("RadioData", RadioData);

        LOG.log("lastCheckedDay " + RadioData.version.lastCheckedDay + " version " + RadioData.version.version);

        var currentDayOfMonth = new Date().getDate();
        if (RadioData.version.lastCheckedDay === currentDayOfMonth) {
            return;
        }

        RadioData.version.lastCheckedDay = currentDayOfMonth;
        DataUpdater.save();

        DataUpdater.requestNewVersion();
    },

    requestNewVersion: function() {
        LOG.log("DataUpdater.requestNewVersion: Refreshing radio data");

        var request = new XMLHttpRequest();
        request.responseType = "text";
        request.addEventListener("load", function(){DataUpdater.remoteDataLoaded(request);});
        request.open("GET", DataUpdater.URL);
        request.send();
    },

    remoteDataLoaded: function(that) {
        var data = JSON.parse(that.responseText);
        var newVersion = data.version.version;
        var ourVersion = RadioData.version.version;

        if (newVersion <= ourVersion) {
            LOG.log("DataUpdater.remoteDataLoaded: We have the most recent version");
            return;
        }

        LOG.log("Upgrading data to version " + newVersion + " from version " + ourVersion);

        var currentDayOfMonth = new Date().getDate();
        data.version.lastCheckedDay = currentDayOfMonth;
        RadioData = data;
        DataUpdater.save();
        Favorites.cleanup();

        if (data.version.motd) {
            LOG.log("Update message: " + RadioData.version.motd);
            DataUpdater.showMessage();
        }
    },

    save: function() {
        ApplicationStorage.set("RadioData", RadioData);
    },

    showMessage: function() {
//        var errorDoc = createAlert("Dáta o rádiách aktualizované", RadioData.version.version + ": " + RadioData.version.motd);
//        navigationDocument.presentModal(errorDoc);

        Presenter.navigateReplace("Main");
    }
};
