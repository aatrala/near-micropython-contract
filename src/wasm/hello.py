#import sys

def trace_calls(frame, event, arg):
  if event == 'call':
     print (f"Calling function: {frame.f_code.co_name}")
     #optionally print arguments:
     #print (f"Arguments: {arg})
     return trace_calls

def say_hello():
    return "Hello, World!"

def add_numbers(a, b):
    return a + b

#sys.settrace(trace_calls)

print ("Hello, world");
print ("sum is ", add_numbers(20, 30));
