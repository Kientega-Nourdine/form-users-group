NEWSCHEMA('Users', function(schema) {
    var compteur = 1;

    // Action for list of all users
    schema.action('list', {
        name: 'List of all users',
        action: function($) {

            $.redirect('/teams/');
        }
    });

    // Action for add users
    schema.action('signup', {
        name: 'Add user',
        input:'firstname:String,lastname:String',
        action: function($, model) {   

            if(compteur > 20) {
                $.redirect('/limits/');
                return;
            } 

            // Insert users in db
            model.id = UID();  
            model.dtcreated = NOW;
            NOSQL('users').insert(model);
            // redirection
            $.redirect('/users/');
            compteur++;
        }  
    });  
    
});   