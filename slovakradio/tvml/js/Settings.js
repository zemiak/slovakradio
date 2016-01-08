var Settings = {
    get: function(key, defaultValue) {
        var value = localStorage.getItem("setting." + key);

        return null === value ? defaultValue : value;
    },

    set: function(key, value) {
        localStorage.setItem("setting." + key, value);
    },

    isHighQuality: function() {
        return "t" === Settings.get("highQuality", "f");
    },

    lowQuality: function() {
        this.set("highQuality", "f");
        Presenter.navigate("Main");
    },

    highQuality: function() {
        this.set("highQuality", "t");
        Presenter.navigate("Main");
    }
};
