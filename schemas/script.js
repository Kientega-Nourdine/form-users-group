NEWSCHEMA('Users', function(schema) {

    // Action for list of all users
    schema.action('list', {
        name: 'List of all users',
        action: function($) {
            // $.callback('List of all users');
            $.redirect('/');
        }
    });

    // Action for add users
    schema.action('signup', {
        name: 'Add user',
        input:'firstname:String,lastname:String',
        action: function($, model) {   
            // Save users in db
            model.id = UID();
            model.dtcreated = NOW;
            NOSQL('users/nosql').insert(model, true).where('id', model.id).callback($.callback);
        }
    });  
    
});   