const timer = function() {
  const args = process.argv.slice(2);
  let sortedArgs= args.sort((a, b) => a - b);
  for (let i = 0; i < sortedArgs.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sortedArgs[i] * 1000);
  }
  return;
};

timer();