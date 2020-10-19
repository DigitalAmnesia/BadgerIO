let organicResults;
organicResultsList=[];
let position;
$("#find-organic").on("click", function(event) {
    event.preventDefault();
    // Here we grab the text from the input box
      var domain = $("#organic-input").val();
        console.log(domain);  
  
      
      var api_key = "abbdaa341ded39791b47a9bc026932e3";
      var organic_finder = `http://api.serpstack.com/search?access_key=${api_key}&query=link%3A${domain}&num=100`;

    // This .on("click") function will trigger the AJAX Call
      console.log(organic_finder);
    // Here we grab the text from the input box
      var domain = $("#organic-input").val();
      console.log(`organic lookup made for: ${domain}`);
      var indexQueryURL = organic_finder;
    // Call to Hunter.IO
    // $.ajax({
    //     url: indexQueryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     organic_Source_List = response;
    //     console.log(organic_Source_List);
    //     var resultsTotal = organic_Source_List.search_information.total_results; 

    // });
    $.getJSON("serpStack.json", function(json) {
    // console.log(json); // this will show the info it in firebug console
    organicResults = json;
    var resultsTotal = parseInt(organicResults.search_information.total_results);
    
    console.log(resultsTotal);
    for (i = 0; i < resultsTotal; i++){
        position = organicResults.organic_results[i].position;
        var title = organicResults.organic_results[i].title;
        var snippet = organicResults.organic_results[i].snippet;
        var prerender = organicResults.organic_results[i].prerender;
        var cachePage = organicResults.organic_results[i].cached_page_url;
        var relatedPages = organicResults.organic_results[i].related_pages_url;
        var url = organicResults.organic_results[i].url;
        var domain = organicResults.organic_results[i].domain;
        organicResultsList.push([position,title,snippet,prerender,cachePage,relatedPages,url,domain]);
        
    }   
    console.log(organicResultsList[1][0]);
    });   
    
});
//http://api.serpstack.com/search?access_key=abbdaa341ded39791b47a9bc026932e3&query=linke%3Adigg.com&num=100



