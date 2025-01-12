import("./micropython.mjs").then((mp_mjs) => 
{
  mp_mjs.loadMicroPython().then((mp) => 
  {
    console.trace();
    mp.runPython("print('hello, world')");
  });
});
