/**
 * 
 */

function loadConfig() {
    return fetch('http://localhost:8080/app/api.jsp')
        .then((response) => response.json())
        .then(function (data) {

            return msalConfig = {
                auth: data,
                cache: {
                    cacheLocation: "sessionStorage", // This configures where your cache will be stored
                    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
                },
                system: {
                    loggerOptions: {
                        loggerCallback: (level, message, containsPii) => {
                            if (containsPii) {
                                return;
                            }
                            switch (level) {
                                case msal.LogLevel.Error:
                                    console.error(message);
                                    return;
                                case msal.LogLevel.Info:
                                    console.info(message);
                                    return;
                                case msal.LogLevel.Verbose:
                                    console.debug(message);
                                    return;
                                case msal.LogLevel.Warning:
                                    console.warn(message);
                                    return;
                            }
                        }
                    }
                }
            }
        })
        .catch(function (error) {
            // A Error occured
            console.log(error);
        });
}

const loginRequest = {
    scopes: ["User.Read"]
};

const tokenRequest = {
    scopes: ["User.Read", "Mail.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

loadConfig()
