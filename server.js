var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    
    title:'Article One | Vignesh sha',
    heading: 'Article one',
    date: 'Feb 21 2017',
    content:`
    
                <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>    
    
    `
    
};

function createtemplate (data){
    
    Var htmltemplate= `
    
    <html>
        <head>
            <title>
                ${title}
            </title>
    
    <link href="/ui/style.css" rel="stylesheet" />
    
        </head>
        
    
        <body>
            
            <div class="container">
                <Div>
                    
                    <a href="/">Home</a>
                </Div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
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

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one',function(req,res){
    
    res.sendFile(path.join(__dirname, 'ui','article-one.html'));
    });
    
app.get('/article-two',function(req,res){
    
    res.sendFile(path.join(__dirname, 'ui','article-two.html'));
    });
    
    
app.get('/article-three',function(req,res){
    
    res.sendFile(path.join(__dirname, 'ui','article-three.html'));
    });
      
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
