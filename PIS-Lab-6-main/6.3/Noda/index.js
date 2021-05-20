const http = require("http");

http.createServer(function(request, response) {

    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (request.url == "/is-92-019") {
        response.write("<h2>Result for 'is-92-019':</h2>" +
            "<p>• Name: Onoshenko Vlad</p>" +
            "<p>• Course: FIOT KPI</p>" +
            "<p>• Group: IS-92</p>"
        );
    } else {
        response.write("<h2>Contact List</h2>");
    }
    response.end();
}).listen(3000, () => { console.log('Server has been started!') });