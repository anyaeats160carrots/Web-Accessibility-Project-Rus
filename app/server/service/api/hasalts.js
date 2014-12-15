exports.post = function(request, response) {

            var cheerio = require('cheerio'),
                $ = cheerio.load(request.body.html);

            var passed = true;
            
            var images = $('img');
            for (var i = 0; i < images.length; i++)
            {
                if (!$(images[i]).attr( 'alt' ))
                {
                    passed = false;      
                    break;
                }                     
            }                   
            response.send(statusCodes.OK, { 'passed' : passed });
};