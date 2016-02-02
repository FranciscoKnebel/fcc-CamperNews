$(document).ready( function() {
  getNews();

  function getNews() {
    $.get("http://www.freecodecamp.com/news/hot", function(news){

      news.forEach(function(article) {
        addEntry(article);
      });
    }, "json");

  }

  function addEntry(article) {
    var entryImage = buildEntryImage(article);
    var entryDescription = buildEntryDescription(article);

    $("#articles").append('<a href="' + article.link + '" target="_blank"><div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"><div class="well post">' + entryImage + entryDescription + '</div></div></a>');
  }

  function buildEntryImage(article) {
    return '<div class="containerImage"><img class="img-responsive authorImage" src="' + article.author.picture + '" alt="authorImage"/></div>';
  }

  function buildEntryDescription(article) {
    var author = article.author.username;
    var headline = article.headline;
    var time = new Date(article.timePosted);
    var upvotes = article.upVotes.length;

    return '<div class="Description"><table style="width:100%"><tr><th style="padding-left: 10px;">By ' + author + '</th></tr><tr><th style="padding-left: 20px;"><i class="fa fa-thumbs-up"> ' + upvotes + '</i></th></tr><tr><td><h3 style="font-size: 1.5em;">' + headline + '</h3></td></tr><tr><td>' + time.toLocaleDateString() + '</td></tr></table></div>';
  }

});
