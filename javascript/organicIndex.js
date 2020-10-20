let organicResults;
organicResultsList=[];

$("#find-organic").on("click", function(event) {
    event.preventDefault();
    // Here we grab the text from the input box
      var domain = $("#organic-input").val();
      console.log(domain);  
      var api_key = "#######################";
      var organic_finder = `http://api.serpstack.com/search?access_key=${api_key}&query=site%3A${domain}&num=1000`;

    // This .on("click") function will trigger the AJAX Call
      console.log(organic_finder);
    // Here we grab the text from the input box
      var domain = $("#organic-input").val();
      console.log(`organic lookup made for: ${domain}`);
      var indexQueryURL = organic_finder;
    // Call to Hunter.IO
    $.ajax({
        url: indexQueryURL,
        method: "GET"
      }).then(function(response) {
    var organicResults = response;
    var resultsTotal = parseInt(organicResults.search_information.total_results);
    var displayTotalResults = document.getElementById('organicURLS').innerHTML = resultsTotal;
    console.log(resultsTotal);
    for (i = 0; i < resultsTotal; i++){
        var table = document.getElementById("organicResults");
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);
        // Insert new cells:
        var displayPosition = row.insertCell(0);
        var displayTitle = row.insertCell(1);
        var displayUrl = row.insertCell(2);
        // var displayPosition = document.getElementById('organicReturnData');
        var position = organicResults.organic_results[i].position;
        displayPosition.innerHTML = position;
        var title = organicResults.organic_results[i].title;
        displayTitle.innerHTML = title;
        var snippet = organicResults.organic_results[i].snippet;
        var prerender = organicResults.organic_results[i].prerender;
        var cachePage = organicResults.organic_results[i].cached_page_url;
        var relatedPages = organicResults.organic_results[i].related_pages_url;
        var url = organicResults.organic_results[i].url;
        displayUrl.innerHTML = url;
        var domain = organicResults.organic_results[i].domain;
        organicResultsList.push([position,title,snippet,prerender,cachePage,relatedPages,url,domain]);
    }   
    });   
    
});




