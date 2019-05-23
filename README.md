# TypeScript Node Express
TypeScript Node Express api route using express

## Inistalled Packages
- body-parser
- cors                      : for cross origin access
- express                   : for api routing
- morgan                    : this is logger to log req and response in console
- nodemon                   : to keep watching the file changes and restart the server.
- simple-color-print        : to make colored log on console
- ts-node                   : to compile/run ts code in node environment
- tslint                    : typescript linting
- typescript                : typescript for development
- @types/cors               : types configuration for cors moduel
- @overnightjs/core         : Overnight js for using Decorator in express routing module
- @overnightjs/logger       : Overnight logger
- @types/express            : types configuration for express module

## Command
- npm run dev : to run application in development
- npm run build:  to build the application
- npm run prod: to make production build
- npm start : to run/test compiled files stored in dist folder

## Notes
- After successful run the application in developmet mode, you can either postman or any other api testing tool, to test the node apis, which runs on http://127.0.0.1:4000.

- Do not change the ip to localhost browser or postman doesnot understand the locahost.