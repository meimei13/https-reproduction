const https = require("https");
// Uncomment this out to see an error.
// const agentbase = require("agent-base");
const url = require("url");


var google = new url.URL("https://google.com");
https.request(new url.URL("/", "https://google.com"), {
  method: "GET",
}).end();

// Uncomment this to see an error.
// https.request("https://google.com/"), {
//  method: "GET",
//}).end();
