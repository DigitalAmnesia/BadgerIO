https://bpgould.github.io/FullStackProject1/
![Project Introduction](https://drive.google.com/uc?export=view&id=1thKefse128GvfnZZn8laUCuAf_7h_Tqn)

# FullStack Project 1 Summary
This project was completed by Mike Hill, Bennett Gould, Habby Olusesi, and Elijah Melanson. Within the project, we utilize the Materialize (Google) front end library, various Google APIs, and Google Firebase for a mBaaS (Mobile Backend-as-a-Service).

Alt attributes, aria-labels, font-sizing convention, and other guidelines were used to maximize accessibility and SEO performance. Maximum caching time of 10 minutes could not be increased due to GitHub Pages limitations. We have also deployed on Google Cloud with a CloudFlare CDN and are continuing to optimize settings there.

Further improvements:
(1) For client security, only allow GitHub Pages/ Google Cloud domains for Firebase API key
(2) Add additional login options including Apple and Facebook
(3) Implement HTML5 templating 
(4) Build out user profile capability and API key user attributes stored in Firebase
(5) Allow for custom dashboards via Apex Charts integration
(6) Re-assess data persistence and the minimize Firebase bandwidth costs by optimizing data structures for the Real Time Database and Firestore
(7) Implement a feature allowing users to query website content via Regex -- expand on email/contact scraping abilities

# Our User Story
This app was designed to assist Marketing Analysts, SEO Specialist, Cyber Intelligence Investigators, or just generally curious people, in aggregating information sources about a website of interest. The end goal is to provide a one-click solution that will make anyone a cyber-sleuth, without having to understand advanced search operators, or the ever changing digital sources that provide useful Open & Closed Source Intelligence.

## Project Goals:
The app will attempt to collect the following information for users about a domain: 
 - What is the purpose of the target site?
 - What sites were found backlinking to the target site?
 - Is there an apparent URL structure?
 - Does the site host any PDF files?
 - Were there any email addresses discovered for the site?
 - Are there any physical addresses on the site?
 - Are there any Social Media accounts referenced on the site?
 - What is the anticipated traffic of the site?
 - Findings will be presented in an easy to read manner.
 - The app will require users to sign up for the service and authenticate before submitting queries. 

## Currently Completed Project Goals
## Demo: Google Sign-In and Firebase Integration
![Google Sign-In Demo](https://drive.google.com/uc?export=view&id=1CrR2gFKCqPjZG8lR0n93Yb_bRDN0gf32)

 - Support for Google Accounts
 - Support for Facebook Accounts
 - Support for Apple Accounts
 - Support for traditional Email Accounts
 - Utilizing Firebase API in order to handle account creation, authorization, automated password recovery, etc.

## Demo: Domain Email Report
![Email Report Demo](https://drive.google.com/uc?export=view&id=1J-FutnuqGmil0E9gHZUVRRDWiw67yUQP)

### This feature attempts to find email addresses belonging to the target website. 
The following information is returned in this report:
 - The Tagret Domain
 - First name of the discovered email address owner
 - Last name of the discovered email address owner
 - A confidence socre in the discovered email address
 - The date the email address was last observed
 - A confirmation that the email address is still on the source URL
 - The source URL where the email address was discovered
 
## Demo: Organic Index Report
![Organic Demo](https://drive.google.com/uc?export=view&id=1Uw913IaM9yrIgXKGc5IC7hkCzNf17di9)

### This feature attempts to collect as many URLS it can from traditional search engine results and present them in an easy to read manner.  This allows the user to quickly assess how the site is structured, focus of content, and a general estimate of content quantity and quality.  

The following information is returned in this report:
 - Rank or postion the URL was found in organic search results
 - Title of the page
 - URL of the page

## Performance Ratings
![Performance Ratings](https://drive.google.com/uc?export=view&id=16WdbZr5cmq7hoYTVLQcvG1U7Ngr7qRey)

## Under The Hood
### Analytics & Widgets
![Analytics & Widgets Icons](https://drive.google.com/uc?export=view&id=1A6oWu_-2GOw0tXQ9OnCtDFVnEZNMnf0k)

### Frameworks, Mobile Components, & CDNS
![Analytics & Widgets Icons](https://drive.google.com/uc?export=view&id=1qTj3TYq4K0sS6W43gn8ZQwNSSqiXYVzo)

## Meet The Developers
![The Developers](https://drive.google.com/uc?export=view&id=1-r-cO5gy2XzzWUKIDntCcA8tOjMoT3wj)





