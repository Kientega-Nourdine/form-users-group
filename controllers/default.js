exports.install = function() {

    ROUTE('GET  /', 'login');
    ROUTE('GET  /teams/', 'teams');
    ROUTE('get  /users/     *Users  -->list');
    ROUTE('POST /signup/     *Users  -->signup');
};
