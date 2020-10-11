// var domain = "digg.com";
var email_Source_List = {};

function hunterIO (domain) {
    var api_key = "e56287fadf01a9610b2c26209a772ffc0832c728";
    var email_finder = `https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${api_key}`;
    // This .on("click") function will trigger the AJAX Call
    console.log(email_finder);
    // Here we grab the text from the input box
    var domain = $("#domain-input").val();
    console.log(`Email lookup made for: ${domain}`);
    var indexQueryURL = email_finder;
    // Call to Hunter.IO
    $.ajax({
      url: indexQueryURL,
      method: "GET"
    }).then(function(response) {
      email_Source_List = response;
      console.log(email_Source_List.data.emails[0]);
    });  
    return email_Source_List;
};