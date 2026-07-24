function callback(rl, next) {
  rl.question("\nPress Enter to return to the menu...", () => {
    setImmediate(() => next(rl));
  });
}


module.exports = callback;