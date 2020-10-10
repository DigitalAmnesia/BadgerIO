
var sitePDF = {};
var siteIndex = {};

// This .on("click") function will trigger the AJAX Call
$("#find-domain").on("click", function(event) {

  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  // Here we grab the text from the input box
  var domain = $("#domain-input").val();
  console.log(domain);
  // Here we construct our URLs
    // This URL will bring back URLS that have been indexed by Google on the target site
    var indexQueryURL = "http://api.serpstack.com/search?access_key=5c4fa6a3ae084b3efa8ac881ced4f4a4&query=site%3A" + domain + "&num=1000";
    
    // This URL will bring back URLs that have been indexed by Google on the target site with PDF files
    var fileTypeQueryURL = "http://api.serpstack.com/search?access_key=5c4fa6a3ae084b3efa8ac881ced4f4a4&query=filetype%3Apdf+site%3A" + domain + "&num=100";
 
    // Google Index Call
    $.ajax({
    url: indexQueryURL,
    method: "GET"
  }).then(function(response) {
    siteIndex = response;
    console.log(sitePDFS);
  });


  // Google Index Call with PDF Files
  $.ajax({
    url: fileTypeQueryURL,
    method: "GET"
  }).then(function(response) {
    sitePDFS = response;
    console.log(sitePDFS);
  });

});