import { NearBindgen, near, call, view } from 'near-sdk-js';

declare const Module: {
    ccall: (func: string, returnType: string, argTypes: string[], args: any[]) => any;
};

@NearBindgen({})
class MicroPythonContract {
    @call({})
    say_hello(): string {
        try {
            // Add logging to see what's happening
            near.log("Calling say_hello function...");
            
            const result = Module.ccall(
                'run_python',
                'string',
                ['string'],
                ['say_hello()']
            );
            
            // Log the result
            near.log("Python function result: " + result);
            return result || "No result";
        } catch (error) {
            // Log any errors
            near.log("Error in say_hello: " + error.toString());
            throw error;
        }
    }

    @call({})
    add_numbers({ a, b }: { a: number, b: number }): number {
        try {
            near.log(`Adding numbers: ${a} + ${b}`);
            
            const result = Module.ccall(
                'run_python',
                'string',
                ['string'],
                [`add_numbers(${a}, ${b})`]
            );
            
            near.log("Addition result: " + result);
            return Number(result);
        } catch (error) {
            near.log("Error in add_numbers: " + error.toString());
            throw error;
        }
    }
}
