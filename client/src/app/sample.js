module.exports = exports = {
  log : function log () {
    return console.log.apply(console, [].slice.apply(arguments));
  },
  contain : function (name, fn) {
    console.group(name);
    fn && typeof fn === 'function' && fn();
    console.groupEnd();
  }
};