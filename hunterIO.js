

/**
 * Returned JSON object from hunterIO API call
 * @type {JSON}
 */
var email_Source_List={};

/**
 * Returned Array parsed from hunterIO API call
 * @type {Array}
 */
var badgerEmailList = [];

/**
 * Defined Array to be used as table row headers.
 * @type {Array}
 */
var rowHeader = ["Domain", "Discovered Email", "Disposable", "Webmail", "Accept All", "Observed Pattern", "Ogranization", "Country", "Extracted On", "Last Seen", "Still On Page", "Source URL"];


// This .on("click") function will trigger the AJAX Call
$("#find-domain").on("click", function(event) {
  // Here we grab the text from the input box
    var domain = $("#domain-input").val();
    console.log(domain);  
    
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
    var api_key = "##########################################";
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
      console.log(email_Source_List);
      var data = email_Source_List;
      var allEmailsTotal = data.data.emails.length;
      for ( i = 0; i < allEmailsTotal; i++ ){
        var targetEmail = data.data.emails[i].value;
        var sourcesTotal = data.data.emails[i].sources.length;
        var targetDomain = data.data.domain;
        var disposable = data.data.disposable;
        var webmail = data.data.webmail;
        var accept_all = data.data.accept_all;
        var pattern = data.data.pattern;
        var organization = data.data.organization;
        var country = data.data.country;
        var state = data.data.state;
      //Logger.log(sourcesTotal);
        for ( j = 0; j < sourcesTotal; j++ ){
          var domain = data.data.emails[i].sources[j].domain;
          var url = data.data.emails[i].sources[j].uri;
          var extracted_on = data.data.emails[i].sources[j].extracted_on;
          var last_seen = data.data.emails[i].sources[j].last_seen_on;
          var still_on_page = data.data.emails[i].sources[j].still_on_page;
          badgerEmailList.push([targetDomain, targetEmail, disposable, webmail, accept_all, pattern, organization, country,extracted_on, last_seen, still_on_page, url,]);
          }
        }
          console.log(badgerEmailList);
          return badgerEmailList;
    }); 
    
});














































// // var domain = "digg.com";
// /**
//  * Returned JSON object from hunterIO API call
//  * @type {JSON}
//  */
// var email_Source_List = {};
// //Hey Mike, you may want to use a local variable using 'let' in side the function and return that then you can just have
// //hunterIO(domain) in place of email_Source_List then you don't have to worry about setting and returning another variable 
// /**
//  * Hunter API call that finds plain text emails from queried domain
//  * @param {string} domain - a domain provided by the user
//  * @return {JSON} object containing email addresses
//  * @example hunterIO('www.yahoo.com');
//  */
// function hunterIO(domain) {
//     var api_key = "e56287fadf01a9610b2c26209a772ffc0832c728";
//     var email_finder = `https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${api_key}`;
//     // This .on("click") function will trigger the AJAX Call
//     console.log(email_finder);
//     // Here we grab the text from the input box
//     var domain = $("#domain-input").val();
//     console.log(`Email lookup made for: ${domain}`);
//     var indexQueryURL = email_finder;
//     // Call to Hunter.IO
//     $.ajax({
//       url: indexQueryURL,
//       method: "GET"
//     }).then(function(response) {
//       email_Source_List = response;
//       console.log(email_Source_List.data.emails[0]);
//     });  
//     return email_Source_List;
// };

