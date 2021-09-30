# Emscripten Playground

## Commands

generate an html file from primes.cpp:
`emcc primes.cpp -o html_template.html`


generate a side module from side_module.c and exporting the 'Increment' function: 
```emcc side_module.c -s SIDE_MODULE=2 -O1 -s "EXPORTED_FUNCTIONS=['_Increment']" -o side_module.wasm```

## Python
create a Python virtual environment: `python3.9 -m venv env`
activate it: `source env/bin/activate`
run a server: `python3 -m http.server 8080`
