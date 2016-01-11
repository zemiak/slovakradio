var ApplicationStorage = {
    get: function(key, defaultValue) {
        var value = localStorage.getItem("com.zemiak.RadiaSK." + key);

        return null === value ? defaultValue : value;
    },

    set: function(key, value) {
        localStorage.setItem("com.zemiak.RadiaSK." + key, value);
    }
};
