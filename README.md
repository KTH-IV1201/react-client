
# CORS Example, Frontend

This project was adapted from the code examples at [https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/). It's the frontend of a CORS example, the corresponding backend is in the [express-server](https://github.com/KTH-IV1201/express-server.git) repository.

## How To Start

Start the application locally with the command `npm start`. You can also find the application live at `https://iv1201-cors-client-ed7087f7f03a.herokuapp.com/`.

## CORS

Use browser tools to see the headers of interest for CORS. The header `Origin` in the request specifies the client's origin. The header `Access-Control-Allow-Origin` in the response specifies from which origins the server allows cross-origin requests. These two headers must have the same value, unless wildcards are used. The server can also specify which headers and HTTP methods are allowed, using the headers `Access-Control-Request-Headers` and `Access-Control-Request-Method`.

## More Information About CORS

There's much more to say about CORS, a good source for more information is the [CORS page at MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). In case of problems, there might be useful information at the [CORS errors page at MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors).
