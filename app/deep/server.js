var DeepstreamServer = require('deepstream.io');
var server = new DeepstreamServer({
	host: "0.0.0.0",
	port: "6020",
	auth: {
		type: "http",
		options: {
            endpointUrl: "https://rtcapi.icentrex.se/api/cli/smspage/auth",
            permittedStatusCodes: [ 200 ],
            requestTimeout: 2000
        }
	}
});

server.start();