var ApplicationStorage = {
    get: function(key, defaultValue) {
        var value = localStorage.getItem("com.zemiak.slovakradio." + key);

        return (!value) ? defaultValue : JSON.parse(value);
    },

    set: function(key, value) {
        localStorage.setItem("com.zemiak.slovakradio." + key, JSON.stringify(value));
    }
};
