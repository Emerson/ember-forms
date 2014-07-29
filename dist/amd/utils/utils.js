define(
  ["exports"],
  function(__exports__) {
    "use strict";
    function createBoundSwitchAccessor(switchValue, myProperty, myDefault) {
      if (myDefault == null) {
        myDefault = 'default';
      }
      return (function(key, value) {
        if (arguments.length === 2) {
          this.set(myProperty, (value ? switchValue : myDefault));
        }
        return this.get(myProperty) === switchValue;
      }).property(myProperty);
    }

    __exports__.createBoundSwitchAccessor = createBoundSwitchAccessor;function namelize(string) {
      return string.underscore().split('_').join(' ').capitalize();
    }
    __exports__.namelize = namelize;
  });