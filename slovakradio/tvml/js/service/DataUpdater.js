var DataUpdater = {
    URL: "http://zemiak.github.io/slovakradio/update/v1/data.json",

    check: function() {
        if (localStorage.radioData) {
            RadioData = JSON.parse(localStorage.radioData);
        }

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

        var currentDayOfMonth = new Date().getDate();
        data.version.lastCheckedDay = currentDayOfMonth;
        RadioData = data;
        RadioData.save();
        Favorites.cleanup();

        if (data.version.motd) {
            DataUpdater.showMessage();
        }
    },

    save: function() {
        localStorage.radioData = JSON.stringify(RadioData);
    },

    showMessage: function() {
        var doc = createAlert("Your Radio Data have been updated", RadioData.version.motd);
        navigationDocument.presentModal(doc);
    }
};
