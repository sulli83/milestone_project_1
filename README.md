# Project Name

## Milestone Project 1 - Think Outside Landscapes Website.

- - -
## UX
This is website designed for small landscaping company.

The primary issue with the companies existing website was its lack of responsiveness.

The website has been designed to be very visually intense at the front end in particualar the title page.

Such a website aims to provide an insight into the workmanship of the client quickly and in a very strong visual manner.

Recomendations are the key method for business aquisition for such a company so many of the users would be previously aware of the company.

These users are using the site to gain more information and a greater insight into the standard of workmanship which the company carry out.

The other primary users of the site are people who've discovered the company throught its online presence. Primarily Instagram.

The aim of the website is also to provide a very visual insight into the company quickly and accesibly.

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.
- - - 
### Original Wireframes

Need to include these

- - -

# Features

# The pages using

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

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

- - -

## Existing Features

Navbar-
This is a consistent feature running through each page.
A short heading and long heading are used in various screen sizes.
```
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
```

Carousel
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea
Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

JQuery
The project uses JQuery to simplify DOM manipulation.

- - -

## Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

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
