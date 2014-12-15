exports.post = function(request, response) {
    var cheerio = require('cheerio'),
                $ = cheerio.load(request.body.html);

    var passed = true;
            
    var IDs = [];  
    $("*").each(function(index, el) {
        var id = $(el).attr('id');
        if (id) {
            if (IDs.indexOf(id) > -1)
            {
                passed = false;
                return;
            }
            else
            {
                IDs.push(id);
            }
        }
    });
    
    response.send(statusCodes.OK, { 'passed' : passed });
};
