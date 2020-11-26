/**
 * ? Networking - http and tcp/udp
 * ? stateless
 * ? connectionless
 * ? flexible
 * ? HTTP message has a start line, req: GET/blog http/1.1, res: http/1.1 200 OK
 * ! headers
 * ! contain key value pairs in object format
 * ! example: {key:values}, content-type: text/html OR application/json
 * ! Cache-Control: public, max-age=0
 * ! Date: Fri, 24 Aud 2018 15:23:58 GMT
 * * Body
 * * STUFF - HTML, 4k video, image
 *
 * ? Node Server
 * ? - write headers
 * ? - write body
 * ? -- used the fs module: sending back http messages, now left to express middleware
 * ? - close connection
 * ? - server.listen, every computers has 65,000 ports
 * ? -- req, res: used in basically every callback
 *
 * * Express Version
 * * - Express IS Node js
 * * - app === express() === createApplication()
 * * - server.listen ----> app.listen
 * * - router
 * * -- app.get, app.post, app.all, etc.
 * * - served up static files with express.static() middleware
 *
 * @section 201
 * 
 * * - Middleware = any func that has access to req, res, next
 * * -- Networking on the outside, node/express development on the inside
 * * -- express.json() -- body parser
 * * -- express.urlencoded() -- body parser
 * * -- helmet() - 3rd party middleware to prevent attackers from setting headers and stuff
 * * Request
 * * - req.ip: containers requesters ip
 * * - req.path: contains the requested path
 * * - req.body: parsed data
 * * Response
 * * - res.send (.end()) - send text/html
 * * - res.sendFile sends file!
 * * - res.locals - is available through the res
 * * - res.json: sends json back as application/json
 */
