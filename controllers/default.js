exports.install = function() {

    ROUTE('GET      /',             'login');
    ROUTE('GET      /teams/',       teams);
    ROUTE('GET      /limits/',      'limits');
    ROUTE('get      /users/         *Users  -->list');
    ROUTE('POST     /signup/        *Users  -->signup');
};

// function find users and send view
function teams() {

    const controllers = this;
    const teams = [];

    // List of all users
    NOSQL('users').find().callback(function(err, response) {
        if(err) {
            console.log(err);
            return;
        }

        // chunkSize number
        let chunkSize = 4;
        for(i = 0; i < response.length; i += chunkSize) {
            teams.push(response.slice(i, i + chunkSize));
        }

        controllers.view('teams', {users: teams});

    });
    
}