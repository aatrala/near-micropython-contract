const cwasm = await import ('./c.wasm.js');
result = await cwasm.add_numbers(2, 20);
console.log (result);
