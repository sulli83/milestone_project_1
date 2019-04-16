# Project Name

## Milestone Project 1 - Think Outside Landscapes Website.

- - -
## Overview

This is website designed for small landscaping company.

The primary issue with the companies existing website was its lack of responsiveness.

The website has been designed to be very visually intense at the front end in particualar the title page.  Which includes a 
4 image Carousel.


## UX

The website has been designed to be very visually intense at the front end in particualar the title page.

Such a website aims to provide an insight into the workmanship of the client quickly and in a very strong visual manner.

The aim of the website is also to provide a very visual insight into the company quickly and accesibly.

# User Stories

### User 1 -
- - - -
I am a user who has actually previously had a recomendation for the company.
I have previously encountered  the services first hand.
The site provides a host of images which can be viewed and further highlight the quality of the work which the company is
capable of completing, increases knowledf
Recomendations are the key method for business aquisition for such a company so many of the users would be previously aware of the company.
Link to Instagram account shows a more frequently updated portfolio of projects.

### User 2 - 
- - - - 
Directed to site from Instagram.
Primary goal of app for this user is to provide clear and accessible links to contact details.
Also to provide background information for the company and the work it carries out.

### User 3 -
- - - - 
I am a user who has been directed to the site through a search for landscaping.
Aims for this user are to provided a visually strong website which highlight the standard of work which
the company routinely completes.
To clearly highlight links to Instagram and to provide contact details for further enquiries.


- - - 
### Original Mockups

- - - 
[mockups/landing_page.png](https://github.com/sulli83/milestone_project_1/blob/master/mockups/landing_page.png)
- - - -
[mockups/about_page.png](https://github.com/sulli83/milestone_project_1/blob/master/mockups/about_page.png)
- - - - 
[mockups/services_page.png](https://github.com/sulli83/milestone_project_1/blob/master/mockups/services_page.png)
- - - -
[mockups/portfolio_page.png](https://github.com/sulli83/milestone_project_1/blob/master/mockups/portfolio_page.png)
- - - -
[mockups/contact_page.pdf](https://github.com/sulli83/milestone_project_1/blob/master/mockups/contact_page.png)

- - -

# Features


- - -

## Existing Features

Navbar-
This is a consistent feature running through each page.
A short heading and long heading are used in various screen sizes.
```
.full-heading{
    font-size:1.75em;
    color:#88D840;
    width:200px;
    position: absolute;
    top: 0%;
    left: 40%;
    margin-right: -60%;
    z-index: 1;
}


.short-heading{
  font-size:1.75em;
    color:#88D840;
    /*#88D840*/
    /*a7d129 original green*/
    width:200px;
    position: absolute;
    top: 75%;
    left: 8%;
    margin-right: -2%;
    z-index: 1;
}


/* Hide short text by default (resolution > 480px)*/
.short-heading { display: none; }

/* When screen size <= 480px, hide short text and show full text*/
@media (max-width: 480px) {
    .short-heading { display: inline-block; }
    .full-heading { display: none; }
}
  
```

### Carousel
- - - -
Included in index.html page using the Bootstrap framework.
4 images which are rotated automatically or using the chevron either side of the image.
 
- - - -

### Footer
- - - -
Consistent throughout pages.
Minimalist appearance as size of page is reduced.
On smaller screens only the link tags to instagram, telephone and e mail remain present.



## Features Left to Implement
- - - -
Contact form needs to send e-mail to company once filled out.


## Technologies Used
- - - -
## HTML5
HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages. 
It's actually three kinds of code: HTML, which provides the structure; Cascading Style Sheets (CSS), 
which take care of presentation; and JavaScript, which makes things happen.
Reference-
https://www.techradar.com/news/internet/web/html5-what-is-it-1047393

## CSS3-
is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. 
It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions
or animations, as well as new layouts like multi-columns, flexible box or grid layouts

*Colors used!!
 - ![#c5f015](https://placehold.it/15/ffff99/000000?text=+) `#ffff99` 
Shade of Canary
- ![#1589F0](https://placehold.it/15/3e432e/000000?text=+) `#3e432e`
Category
green (dark green)
- ![#1589F0](https://placehold.it/15/88D840/000000?text=+) `#88D840`
Category
green (light green)
- ![#1589F0](https://placehold.it/15/ffffe6/000000?text=+) `#ffffe6`
Category
light yellow


 
## Bootstrap
Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.
Bootstrap 4 is the newest version of Bootstrap
Bootstrap grid system was used extensively throught the webiste.
- - - -
https://getbootstrap.com/docs/4.0/layout/grid/
- - - -
##C9
Cloud 9 IDE(Integrated Development Environment) was used to develop this app. This open source software allows
users to easily write, run and debug code with just a browser.
It is a cloud based service which promotes and allows serverless development of apps.

- - -

## Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

HTML validator:
https://validator.w3.or

CSS validator
https://jigsaw.w3.org



You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment
The page was deployed through GITHUB.
The process involved using a CLI.
Data files which were created initially on a Cloud9 IDE and were then uploaded onto GITHUB  which is a version control software.
The command which were primarily used this were

```
git init
```

then
```
git add .
```
followed by
```
git commit -m 'message to describe commit inserted here'
```
followed by
the entering of the users username + password
then finally
git push origin.
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
Website was also deployed to Netifly.com and at 
- - - -
https://thinkoutsidelandscapes.netlify.com
- - - -

App is also published via Github pages at the address.
- - - -  -


 - - - - -

- - -

### Credits

Code for the Carousel was taken from Bootstrap.com website.


Thanks to Daniel Collins (Think Outside company director) for providing the most of original text content,images and logo.

- - -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

- - -
## Acknowledgments

Thanks to my Code Institute mentors and also the community of Slack for the help provided
when i was was struggling.
