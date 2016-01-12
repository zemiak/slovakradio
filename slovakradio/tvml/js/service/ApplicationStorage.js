var ApplicationStorage = {
    get: function(key, defaultValue) {
        var value = localStorage.getItem("com.zemiak.slovakradio." + key);

        return null === value ? defaultValue : value;
    },

    set: function(key, value) {
        localStorage.setItem("com.zemiak.slovakradio." + key, value);
    }
};
