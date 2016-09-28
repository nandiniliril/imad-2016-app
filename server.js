var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Poem one',
        heading: 'Mother Nature',
        date: '28th September 2016',
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
},
    'article-two' : {
        title: 'O Woman',
        heading: 'Poem by Rabindranath Tagore',
        date: '29th September 2016',
        content: `<p>O woman, you are not merely the
                handiwork of God, but also of men;
                these are ever endowing you with
                beauty from their hearts.
               </p>

            <p>Poets are weaving for you a web
                with threads of golden imagery;
                painters are giving your form ever
                new immortality.
            </p>

            <p>
            The sea gives its pearls, the mines
            their gold, the summer gardens their
            flowers to deck you, to cover you, to
            make you more precious.</p>
        
            <p>The desire of men's hearts has shed
                its glory over your youth.
                You are one half woman and one
                half dream. </p>`
    },
    'article-three' : {
        title: 'Poem',
        heading: 'The Bazzars of Hyderabad',
        date: '26th September 2016',
        content: `<p>
                  What do you sell, 0 ye merchants?

                    Richly your wares are displayed,
                    
                    Turbans of crimson and silver, 
                    
                    Tunics of purple brocade,
                    
                    Mirrors with panels of amber, 
                    
                    Daggers with handles of jade. </p>
                    
                    
                    <p>What do you weigh, 0 ye vendors?
                    
                    Saffron and lentil and rice.
                    
                    What do you grind, 0 ye maidens? 
                    
                    Sandalwood, henna and spice. 
                    
                    What do you call, 0 ye pedlars? 
                    
                    Chessmen and ivory dice. </p>
                    
                    
                    <p>What do you make, 0 ye goldsmiths?
                    
                    Wristlet and anklet and ring, 
                    
                    Bells for the feet of blue pigeons, 
                    
                    Frail as a dragon-fly's wing, 
                    
                    Girdles of gold for the dancers,
                    
                    Scabbards of gold for the king. </p>
                    
                    
                    <p>What do you cry, 0 ye fruitmen? 
                    
                    Citron, pomegranate and plum. 
                    
                    What do you play, 0 musicians? 
                    
                    Cithar, sarangi and drum. 
                    
                    What do you chant, 0 magicians? 
                    
                    Spells for the aeons to come. </p>
                    
                    
                    <p>What do you weave, 0 ye flower-girls?
                    
                    With tassels of azure and red? 
                    
                    Crowns for the brow of a bridegroom, 
                    
                    Chaplets to garland his bed, 
                    
                    Sheets of white blossoms new-gathered 
                    
                    To perfume the sleep of the dead.   
                                        
                                    </p>`
                        }
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

app.get('/:articleName', function (req, res) {
    //articleName = article-one
    //articles[articleName] = {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
