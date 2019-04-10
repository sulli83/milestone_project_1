# Project Name

## Milestone Project 1 - Think Outside Landscapes Website.

- - -
## Overview

This is website designed for small landscaping company.

The primary issue with the companies existing website was its lack of responsiveness.

## UX

The website has been designed to be very visually intense at the front end in particualar the title page.

Such a website aims to provide an insight into the workmanship of the client quickly and in a very strong visual manner.

The aim of the website is also to provide a very visual insight into the company quickly and accesibly.

# User Stories

### User 1 -
- - - -
I am a user who has actually previously had a recomendation for the company.
I have encounter the services first hand.
The site provides a host of images which can be viewed and further highlight the quality of the work which the company is
capable of completing.
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
Including in index.html page using the Bootstrap framework.
4 images which are rotated automatically or using the chevron either side of the image.
 
### Cards
- - - -
Represent various operations which company carry out.
tags created links here.
```
 
      <div class="inner_block col-lg-3  col-xs-10">
          <div class="image_block image_block_2 ">
                 <a href="/services.html">
              <img id=image_1 class="thumb-img" src="/images/laying_slabs.jpg">
            <!--closing image block for thumbnail-->
            </div>
            <div class="text_block">
                <h2>
                Construction
                </h2>
                </a>
        <p>
           We have a team of highly skilled tradesmen<br>
           Our team is experienced and skilled in all aspects of landscaping<br>
           A portfolio of previous high quality projects is available for inspection.
          <!--close of text_block-->
         </p>
          </div>
          <!--closing of inner block-->
       </div>
 ```

### Footer
- - - -
Consistent throughout pages.
Minimalist appearance as size of page is reduced.
On smaller screens only the link tags to instagram, telephone and e mail remain present.



## Features Left to Implement
- - - -
Contact form needs to send e mail to company owner once filled out.
Another feature idea

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
Use of bootstrap grid can be clearly seen here.

```
 <div class="inner_block col-lg-3  col-xs-10">
          <div class="image_block image_block_3">
               <a href="/services.html">
              <img id=image_1 class="thumb-img" src="/images/buxus_main.jpg">
            <!--closing image block for thumbnail-->
            </div>
            <div class="text_block">
                <h2>
                Maintenance
                </h2>
                </a>
            <p>
           Maintenance division is operated and managed by highly skilled and
           fully qualified Horticulturists.<br>
           We pride ourself on our knowledge and
           expertise in this area of Landscaping<br>
           </p>
          <!--close of text_block-->
          </div>
          <!--closing of inner block-->
    </div>
```



- - -

## Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

HTML validator:
https://validator.w3.or

CSS validator
https://jigsaw.w3.org

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

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
Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

- - -

### Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X

- - -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

- - -
## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
