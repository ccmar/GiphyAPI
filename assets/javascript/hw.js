$('button').on('click', function() {
    var giphy = $(this).data('giphy');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphy
                   + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log (queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {  
        console.log(response)
        var results = response.data
        for (var i = 0; i < results.length; i++) {
            var giphyDiv = $('<div class="giphyDiv">');
            var p = $('<p>').text('Ratings: ' + results[i].rating);
            var giphyImage = $('<img>');
            giphyImage.attr('src', results[i].images.fixed_height.url);
            giphyDiv.append(p);
            giphyDiv.append(giphyImage);
            $('.gifsAppearHere').prepend(giphyDiv);
        } 
    }); 
}); 
