require('./ravelryApi.js');

class ApiLogin {
    static api;

    ravLogin = function () {
        this.api = new RavelryApi();
    }
}

module.exports = ApiLogin;