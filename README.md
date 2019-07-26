# https-reproduction
When calling https.get(url[,options]) node will throw an error using the agentbase dependency

passing https.request a string will return a type error

passing https.request a url object will cause agent-base to drop the hostname and eventually crash the application
