const https = require("https");
// Comment this out to see the expected result.
// const agentbase = require("agent-base");
const url = require("url");


var google = new url.URL("https://google.com");
https.request(new url.URL("/", "https://google.com"), {
  method: "GET",
}).end();
