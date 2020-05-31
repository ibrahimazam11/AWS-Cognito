const http     = require( "http" ),
      AWS      = require( "aws-sdk" ),
      hostname = "127.0.0.1",
      port     = 3000,
      server   = http.createServer( (req, res) => {
          res.statusCode = 200;
          res.setHeader( "Content-Type", "text/plain" );
          res.end( "Hello World\n" );
      } );


const getUsers = () => {
    const params = {
        UserPoolId: "us-east-2_OQO73DfxP",
          Filter: `username=\"Peres\"`
    };

    return new Promise( (resolve, reject) => {
        AWS.config.update( {
            region           : "us-east-2",
            "accessKeyId"    : "AKIA3RNPO2Z7OYT4ZX6J",
            "secretAccessKey": "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"
        } );
        const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
        cognitoidentityserviceprovider.listUsers( params, (err, data) => {
            if ( err ) {
                console.log( err );
                reject( err );
            }
            else {
                console.log( "data", data );
                resolve( data );
            }
        } );
    } );
};
getUsers();

server.listen( port, hostname, () => {
    console.log( `Server running at http://${hostname}:${port}/` );
} );