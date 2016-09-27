var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Mother Nature',
    heading: 'Please Enjoy this Poem',
    date: '27th September, 2016',
    content: `
                <p>I am mother nature 
                        Which creates and destroys a creature
                        It took me a long while 
                        To better the way you live. 
                        Since you have turned hostile, 
                        I've got no more to give. </p>
        
                    <p>My land is filled with waste 
                        My children are displaced. 
                        They live in utter fear, 
                        Watching friends disappear. </p>
        
                    <p>I have become man-made, 
                        Who serves you like a maid. 
                        Unnatural and impure, 
                        A disease with no cure.
                    </p>
        
                    <p>  My children, I love you. 
                         I hope you love me too. 
                        Your mother needs you now. 
                        Help me I'll show you how.  
                    </p>
        
                    <p>Recycle and conserve, 
                        Heed the rights I deserve. 
                        Hear my weakening voice, 
                        Help me regain my poise.  
                    </p>
        
                    <p>My gifts you must protect: 
                        From air to ocean shelf. 
                        My love you should respect 
                        Save me to save yourself.
                    </p>`
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name ="viewport" content="width=device-width, initial scale =1" />
            <link href="/ui/style.css" rel="stylesheet" />
        
        </head>
        
        <body>
            <div class ="container">
            <div>
                <a href="/">home</a>
            </div>
                ${heading}
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
    </body>
    
    </html>
   `;
   return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
