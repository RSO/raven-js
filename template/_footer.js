
// Expose Raven to the world
window.Raven = Raven;

// AMD
if (typeof define === 'function' && define.amd) {
    define(function() { return Raven; });
}

})(window);
