// build.js
const fs = require('fs');
const path = require('path');

async function buildContract() {
    console.log('Starting build process...');

    // Read WASM file
    console.log('Reading MicroPython WASM...');
    const wasmPath = path.join(__dirname, 'src', 'wasm', 'micropython.wasm');
    const wasmBinary = fs.readFileSync(wasmPath);
    console.log(`WASM file size: ${wasmBinary.length} bytes`);

    // Read Python code
    console.log('Reading Python source...');
    const pythonPath = path.join(__dirname, 'src', 'hello.py');
    const pythonCode = fs.readFileSync(pythonPath, 'utf8');

    // Read contract source
    console.log('Reading contract source...');
    const contractPath = path.join(__dirname, 'src', 'contract.ts');
    const contractSource = fs.readFileSync(contractPath, 'utf8');

    // Create final contract
    console.log('Generating final contract...');
    const finalContract = `
// MicroPython WASM binary
const wasmBinary = new Uint8Array([${Array.from(wasmBinary)}]);

// Python source code
const pythonCode = \`${pythonCode}\`;

${contractSource}
    `;

    // Write final contract
    const outputPath = path.join(__dirname, 'build', 'final_contract.ts');
    fs.writeFileSync(outputPath, finalContract);
    console.log('Build complete!');
}

buildContract().catch(console.error);
