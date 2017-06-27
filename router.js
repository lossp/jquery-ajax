app.get('/getNews', function(req, res){
    var news = [
        {
            title: 'News1'
        },
        {
            title: 'News2'
        },
        {
            title: 'News3'
        },
        {
            title: 'News4'
        },
        {
            title: 'News5'
        },
        {
            title: 'News6'
        },
        {
            title: 'News7'
        },
        {
            title: 'News8'
        }
    ];
    var page = req.query.page;
    var length = 2;
    var retnews = news.slice(page*length, page*length+length);
    res.send(retnews);
})