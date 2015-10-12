$(init);

function init() {
    $('#search').click(function () {
        var movieName = $("#movieName").val();    
        searchMovie(movieName, renderMovieTemplate);
    });
}

function searchMovie(movieName, renderMovieTemplate) {
    console.log(movieName);
    $.ajax({
        url: "http://www.myapifilms.com/imdb?title="+movieName+"&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=4&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0",
        dataType: "jsonp",
        success: renderMovieTemplate
    });
}

function renderMovieTemplate(movies) {
    console.log("hi");
    console.log(movies);

    var table = $('table');
    var tbody = $('table > tbody');
    tbody.empty();
    
    for(var i=0;i<movies.length;i++)
    {

        var title = movies[i].title;
        var languages = movies[i].languages;
        var plot = movies[i].plot;
        var posterURL = movies[i].urlPoster;
        var movieURL = movies[i].urlIMDB;


        // Instead of adding <tr> and <td> in the table, we could have had a template of table in out HTML file.
        // And get the hold of respective tr and td using their ID or CLASSNAMES to update with the correct values.
        // Templates are more famous because we clone them in our RAM only for once, then we play with it and then 
        // finally write back to the DOM. Hence reducing read and write operations, which are pretty costly.So we 
        // reduce the time to go back and forth DOM.

        var tr = $("<tr>");
        
        var tdTitle = $("<td>")
        var imdbURL = $("<a>");
        imdbURL.attr("href", movieURL).html(title);
        tdTitle.append(imdbURL);

        var ul = $("<ul>");
        for (var j = 0; j < languages.length; j++)
        {
            var li = $("<li>");
            li.append(languages[i]);
            ul.append(li);    
        }
        var tdLanguage = $("<td>").append(ul);
        
        var tdPlot = $("<td>").append(plot);
        var tdPosterURL = $("<img>").attr("src", posterURL);


        tr.append(tdTitle);
        tr.append(tdLanguage);
        tr.append(tdPlot);
        tr.append(tdPosterURL);

        table.append(tr);
    }
}
