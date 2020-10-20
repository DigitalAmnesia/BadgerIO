// var domain = "digg.com";
/**
 * Returned JSON object from hunterIO API call
 * @type {JSON}
 */
var email_Source_List={};
var badgerEmailList = [];



// This .on("click") function will trigger the AJAX Call
$("#find-domain").on("click", function(event) {
  event.preventDefault();
  // Here we grab the text from the input box
    var domain = $("#domain-input").val();
  //  console.log(domain);  

    
    var api_key = "########################";
    var email_finder = `https://api.hunter.io/v2/domain-search?domain=${domain}&limit=100&api_key=${api_key}`;
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
      // console.log(email_Source_List);
      var data = email_Source_List;
      var allEmailsTotal = data.data.emails.length;
      var emailSpan = document.getElementById('emailCount');
      emailSpan.innerHTML = allEmailsTotal;
      console.log(allEmailsTotal);
      var emailList = [];
      
      for ( i = 0; i < allEmailsTotal; i++ ){
        var targetEmail = data.data.emails[i].value;
        emailList.push(targetEmail);
        var firstName = data.data.emails[i].first_name;
        var lastName = data.data.emails[i].last_name;
        var confidence = data.data.emails[i].confidence;
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
          badgerEmailList.push([targetDomain, firstName, lastName, targetEmail, confidence, disposable, webmail, accept_all, pattern, organization, country,extracted_on, last_seen, still_on_page, url,]);
          }
        
        }
        
      for ( i = 0; i < badgerEmailList.length; i++){
          //Grab the results table
          var table = document.getElementById("emailDiscoveryResults");
          // Create an empty <tr> element and add it to the 1st position of the table:
          var row = table.insertRow(-1);
          // Insert new cells:
          var domain = row.insertCell(0);
          var fname = row.insertCell(1);
          var lname = row.insertCell(2);
          var email = row.insertCell(3);
          var confidence = row.insertCell(4); 
          var extractedDate = row.insertCell(5);   
          var lastSeenDate = row.insertCell(6);  
          var onPage =   row.insertCell(7); 
          var source =   row.insertCell(7);
          domain.innerHTML = badgerEmailList[i][0];
          fname.innerHTML = badgerEmailList[i][1];
          lname.innerHTML = badgerEmailList[i][2];
          email.innerHTML = badgerEmailList[i][3];
          confidence.innerHTML = badgerEmailList[i][4];
          extractedDate.innerHTML = badgerEmailList[i][11];
          lastSeenDate.innerHTML = badgerEmailList[i][12];
          onPage.innerHTML = badgerEmailList[i][14];
          source.innerHTML = badgerEmailList[i][13];

      }

    }); 
      
});
