
// AOS library initialisation and duration setting

AOS.init({
  duration: 500,
})


// Load and install the Hyphenopoly library 

import hyphenopoly from "hyphenopoly";


const Hyphenopoly = {
    "require": {
        "es": "anticonstitucionalmente",
        "it": "precipitevolissimevolmente",
        "de": "Silbentrennungsalgorithmus",
        "en-us": "antidisestablishmentarianism"
    },
    "paths": {
        // Path to the directory of pattern files
        "patterndir": "./js/hyphenopoly/patterns/",
        // Path to the directory where the other ressources are stored
        "maindir": "./js/hyphenopoly/"
    }
};

hyphenopoly.config({
  require: {
      "de": "FORCEHYPHENOPOLY",
      "en-us": "FORCEHYPHENOPOLY"
  },
  setup: {
      selectors: {
          ".container": {},
          ".body": {}
      }
  }
});
