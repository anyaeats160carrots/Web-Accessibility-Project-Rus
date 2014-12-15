exports.post = function(request, response) {
    
    var uniqueIds = { text: 'Все идентификаторы уникальны', link: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-parses'}; 
    var alts = { text: 'Есть альтернативы картинкам', link: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-text-equiv-all'};
    var passed = [];
    var failed = [];
    
    //TODO: put in separate function
    var cheerio = require('cheerio'),
                $ = cheerio.load(request.body.html);
    var p = true;
    var images = $('img');
    for (var i = 0; i < images.length; i++)
    {
       if (!$(images[i]).attr( 'alt' ))
                {
                    p = false;      
                    break;
                }                     
            }
            
     if (p)
        passed.push(alts);
     else
        failed.push(alts);
     
    //TODO: put in separate function
    p = true;                    
    var IDs = [];  
    $("*").each(function(index, el) {
        var id = $(el).attr('id');
        if (id) {
            if (IDs.indexOf(id) > -1)
            {
                p = false;
                return;
            }
            else
            {
                IDs.push(id);
            }
        }
    });
    
    if (p)
        passed.push(uniqueIds);
     else
        failed.push(uniqueIds);

    response.send(statusCodes.OK, 
    { 'passed': passed, 'failed': failed});
};
