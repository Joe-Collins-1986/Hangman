# ***** REQUIRES UPDATE *******


# Muscle Map Website
[View the live project here.](https://joe-collins-1986.github.io/muscle-map/)

(**Note:** this is a fictitious client generated for the purpose of developing this project to test my HTML and CSS essentials.)

This website has been designed to provide users with a high-level overview of which exercises can be used to train specific muscle groups. They will then be able to use these exercises to create a workout plan targeted to their number of available training days.

# Responsive Review
![Responsive Review](assets/readme-assets/1.responsive/home-responsive.png)

## Responsive review of all website pages:
- [Home](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/index.html)
- [Chest](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/chest.html)
- [Back](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/back.html)
- [Shoulders](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/shoulders.html)
- [Legs](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/legs.html)
- [Abs](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/abs.html)
- [Plan](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/plan.html)
- [Contact](https://ui.dev/amiresponsive?url=https://joe-collins-1986.github.io/muscle-map/contact.html)

# User Experience (UX)
## Website Objectives

   #### **Client Goals**
   The client is a personal trainer and gym owner.
   1. Develop brand recognition for his logo and brand colours.
   2. Set up a website to generate traffic which will:
      - drive additional gym attendance.
      - provide a contact for his personal training.
   3. Engage with new and first-time gym-goers by providing a simple breakdown of which exercises target each muscle. 
   4. Engage with new and first-time gym-goers by providing a breakdown of the differences between compound exercises and isolation exercises with a link to further reading.
   5. Link exercises to YouTube instruction videos. (This will later be replaced with videos the client will generate personally.)
   
   #### **Client Future Goals**
   Wishes which will later be developed to incorporate:
   - Sale of Muscle Map merchandise.
   - Advertisement opportunities.
   - Building a sales platform to connect personal trainers to client’s dependant on specialisation.

   #### **First-Time Visitor Goals**
   1. Acknowledge clear and memorable branding.
   2. Understand the purpose of the site.
   3. Simple intuitive navigation.
   4. Easy access to external links provided on the website.
   5. Intuative contact form and links to social media.
   6. Receive gym location.
   7. Gain a basic understanding of the exercises demonstrated and how and why they are used.
   8. Readable and asthetically pleasing on all devices.
   9. Be able to create a basic training plan.

   #### **Returning Visitor Goals**
   1. Revisit to access instructional links.
   2. Revisit to access social media links.
   3. Revisit to create or update training plan.
   4. Revisit to request personal training after being introduced to the fundamentals.
   5. Revisit to locate gym.

## Design

  #### **Colour Scheme**
  Provided by client to match logo.
   - Main colours: 
      - #FA7C07 (Orange)
      - #004AAD (Blue)

   - Colours use to offset text:
      - #F5F5F5 (Off-White)
      - #494949 (Grey with Slight Opacity) 

![Colour Palette](assets/readme-assets/2.UX/colour-picker.png)

  #### **Typography**
  - Header Titles -'Roboto Slab', serif
  - CTA - Arial, Helvetica, sans-serif
  - Header, Footer, Standard Content -'Times New Roman', Times, serif

  #### **Imagery**
  - Until the client can provide their own pictures the images will be taken from Unsplash. 
  
  These images have been selected to be:
   - Dynamic
   - Pair well with branding colour
   - Appropriate orientation for the space
   - Appropriate to page content

## Structure Non-Linear Plane
![Structure Non-Linear Plane](assets/readme-assets/2.UX/Structure-non-linear.png)

## Wireframes
- [Skeleton Plane](https://www.figma.com/file/QUILIZygurngxMKsDxOrIE/Muscle-Map-(Skeleton)?node-id=5%3A230)

- [Surface Plane](https://www.figma.com/file/M4Emuqqc618HWPX28fgZHk/Muscle-Map-(Surface)?node-id=5%3A182)

**NOTE:** The structure and wireframes are only to act as a concept and are subject to change as the website development evolves in collaboration with the client.

## Features
![Feature Mind Map](assets/readme-assets/2.UX/Features.png)
The above provides an inital mind map into what features might be appropriate for the website given the clients specifications.

### All Pages
* Web-tab:
   - Add icon to tab.
* Logo:
   - Link up logo to direct to index page.
* Navbar:
   - Link to other pages.
   - Add hover colour change to anchor links.
   - Create Hamburger menu (use JavaScript code from instructional video, see credits for author).
* Call To Action (CTA):
   - Hover colour change.
   - Set 2 colours dependant on background colour.
   - Link to plan page.
* Footer:
   - Fix location on page to promote social media and drive traffic to gym and personal training.
   - Anchor links functional to external sites. (Not linked up to specific accounts due to this being a fictional client).
   - Responsive to all device sizes.

### Index Page
* Hero image & content:
   - Set absolute position to not be pushed down by hamburger menu.
   - Zoom animation.

### Exercise/Muscle Pages
* Title and header image:
   - Responsive, rearrange to be appropriate to screen size.
* External links:
   - Link to appropriate section of external website using the websites appropriate ID as determined using Web Developer.
* Link to YouTube:
   - Open YouTube as external link. No requirement to embed and mute as the video will be the sole reason to watch instructional video.
   - Open all external links on separate tab and add aria-labels to detail their purpose.

### Plan Page
* Title and header image:
   - Animate arrow icons in the title to flash upon opening page to help direct users below the header image.
   - Image zoom animation.
* Content cards:
   - Add hover colour change to enhance readability and make page more dynamic.
* Tables:
   - Add borders for readability.
   - Make responsive to screen size.

### Contact Page
* Form:
   - Validate inputs.
   - Push data on submission (data not used).
   - Assign data values.
   - Make radio buttons responsive to small screen.
   - Add completion page.
   
* Map:
   - Embed Google Map.
   - Set random location to act as gym location.

# Further Development
* Add automation of exercise plan based of information entered by visitor.
* Add E-commerce for sale of Muscle Map merchandise.

# Technologies Used
## Languages Used
   - HTML
   - CSS
   - JavaScript (taken directly from a YouTube tutorial as I have not yet covered JavaScript - YouTube channel referenced in credits section)

## Frameworks, Libraries & Programs Used
1. Google Fonts:
   - Used to obtain appropriate fonts to use in website not held as standard.
2. Font Awesome:
   - Used to obtain several icons used to improve the visuals of the website.
3. Git:
   - Used for version control and to Push to GitHub.
4. GitHub:
   - Used to store and share the code as well as publish to live website.
6. Figma:
   - Used to plan out website format.
7. Web Developer:
   - Used to analyse HTML and CSS output and correct where required.

# Testing
 ## HTML Validator Results: 
   - [Home](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Findex.html)
   - [Chest](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Fchest.html)
   - [Back](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Fback.html)
   - [Shoulders](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Fshoulders.html)
   - [Legs](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Flegs.html)
   - [Abs](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Fabs.html)
   - [Plan](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Fplan.html)
   - [Contact](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2Fcontact.html)

 ## CSS Validator Results
   - [CSS validator results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjoe-collins-1986.github.io%2Fmuscle-map%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

 ## Lighthouse Accessibility Results:
![Accessibility Review](assets/readme-assets/3.testing/home.png)

   - [Home](assets/readme-assets/3.testing/home-sum.png)
   - [Chest](assets/readme-assets/3.testing/chest-sum.png)
   - [Back](assets/readme-assets/3.testing/back-sum.png)
   - [Shoulders](assets/readme-assets/3.testing/shoulders-sum.png)
   - [Legs](assets/readme-assets/3.testing/legs-sum.png)
   - [Abs](assets/readme-assets/3.testing/abs-sum.png)
   - [Plan](assets/readme-assets/3.testing/plan-sum.png)
   - [Contact](assets/readme-assets/3.testing/contact-sum.png)

## Testing User Stories from User Experience (UX) Section
#### **Client Goals**
   1. Develop brand recognition for his logo and brand colours.
      * **REVIEW - Colours provided by the client used consistently and extensively throughout website.**
   2. Set up a website to generate traffic which will:
      - drive additional gym attendance.
         * **REVIEW - Provides location of the gym to drive traffic.**
      - provide a contact for his personal training.
         * **REVIEW - Provides form to contact personal trainer (only managing front end requirements).**
   3. Engage with new and first-time gym-goers by providing a simple breakdown of which exercises target each muscle. 
      * **REVIEW - Each muscle split into its own page with a clear breakdown of exercises to target it.**
   4. Engage with new and first-time gym-goers by providing a breakdown of the differences between compound exercises and isolation exercises with a link to further reading.
      * **REVIEW - Link to external source explaining the differences. Used external website section ID to direct user to relevant paragraph.**
   5. Link exercises to YouTube instruction videos. (This will later be replaced with videos the client will generate personally.
      * **REVIEW - Links to YouTube set up for each exercise. Client specified which YouTuber they wished to reference.**

#### **First-Time Visitor Goals**
   1. Acknowledge clear and memorable branding.
      * **REVIEW - Muscle Map logo clearly visable in the top left.**
      * **REVIEW - Colours provided by the client used consistently and extensively throughout website.**
   2. Understand the purpose of the site.
      * **REVIEW - Hero image gives clear indication this site is dedicated to exercise.**
      * **REVIEW - Hero text appears to user instantly and references the website as a training companion.**
   3. Simple intuitive navigation.
      * **REVIEW - Clear navigation bar at the top of the page.**
      * **REVIEW - Navigation bar reduces to hamburger icon for smaller screens to ensure information is presented clearly.** 
      * **REVIEW - Logo at the top left corner always redirects the user back to the home page.**
   4. Easy access to external links provided on the website.
      * **REVIEW - External links open on a click and open a separate page.**
      * **REVIEW - Each link has an aria-label to detail what the link is and that it will open in a separate tab.**
   5. Intuative  contact form and links to social media.
      * **REVIEW - Social media links clearly detailed in the footer, which is set to a fixed position to always be visible.**
      * **REVIEW - Contact Form located on its own page with clear labelling of inputs.**
   6. Receive gym location.
      * **REVIEW - Location provided in the form of Google Maps at the bottom of the contact page.**
   7. Gain a basic understanding of the exercises demonstrated and how and why they are used.
      * **REVIEW - Each exercise detailed has an accompanying tutorial video to detail correct form and exercise benefit.**
   8. Readable and asthetically pleasing on all devices.
      * **REVIEW - Media queries used to ensure each page is responsive to all devices.**

#### **Returning Visitor Goals**
   1. Revisit to access instructional links.
      * **REVIEW - Links provide a useful repository for users to keep them comming back to the site.**
   2. Revisit to access social media links.
      * **REVIEW - Opportunity for users to come back to locate the social media links.**
   3. Revisit to create or update training plan.
      * **REVIEW - Plan is set up in a way to be re-usable to encourage users to return.**
   4. Revisit to request personal training after being introduced to the fundamentals.
      * **REVIEW - After getting what they can from the website and building a foundation, the website encourages users to continue their development by contacting a personal trainer.**
   5. Revisit to locate gym.
      * **REVIEW - Gym location is detailed as part of the contact page.**

## Further Testing
* Tested across Google Chrome and Safari browsers.
* Viewed on a variety of devices using Web Developer Tools as well as several live desktop, iPad and mobile devices. 
* Each page tested by developer and friends to ensure functionality worked as expected.
* Issued to Slack community to review and feedback on.

## Bugs
  * Navigation bar had too much content to display neatly.
      - Resolved by utilising a YouTube tutorial on how to create and add JavaScript to create a hamburger menu for small screens.
  * Wanted the hero image on the home page not to be pushed down by the hamburger menu.
      - Resolved by setting the hero image and hero text to absolute values and moving the hero image back on the z-axis.
  * On publication to Git Pages the internal links did not work.
      - Resolved by setting them to relative paths and also removing the / from the front of the path.
  * After fixing the position of the footer I found that the content would disappear underneath it.
      - Resolved issue by producing a spacing div at the bottom of each page equal to the size of the footer ensuring the page moved down and essential content remained visable.
  * Had issue with re-using IDs.
      - Converted IDs to classes to be able to re-utilise accross pages for efficiency.
  * Images downloaded from Unsplash were very large and caused issues with the performance of the page when I used Lighthouse to evaluate them.
      - Reduced image sizes on each page to improve performance.

## Key Learns
* On following projects I will look to be more efficient in my use of CSS. In this project I styled each element as I needed them which caused a lot of duplication and redundant code. By defining the key classes and body formats I need across the entire project up front I will be able to optimise my code.
* In future projects I will aim to move away form the heavy use of pixels and instead primarily utilise rem (and in some specific circumstances em). This will provide more control over responsive design.
* In this project I developed media queries as and when i required them. As a result, I built them directly into the body of the CSS code alongside the elements they impacted. My Mentor advised that it would be best practice to consolidate these at the end of the CSS page. This would reduce line requirements by placing all media queries within a singular max-width media query appropriate to them. However due to the way I built and structured this project it would make the code difficult to read and locate so I have opted to leave this project as is for the sake of clarity but apply a more structured approach to my next project.
* On the Plan page, I made the cards responsive by converting from flex direction rows to columns and updating the margins so it showed correctly on a smaller screen. This was done as originally I had 3 cards when I built the functionality, however had I known at the point of build that I would only use 2 cards I would have used flex-grow and flex wrap instead for a more concise and efficient code. This was not an appropriate option for more that 2 cards as it would have shown them with varied widths when pushed onto the next line.

# Deployment
## Set up Local GitHub Repository
1. Go to my GitHub.
2. Select the + icon in the top right corner and select new repository.
3. Provide repository name and description.
4. Select Add Readme File.
5. Select Create Repository.

## Repository Framework
1. Select the repository on GitHub and open with Gitpod (green button).
2. Create required html pages.
3. Create assets folder.
4. Within assets folder create css folder, images folder, js folder & readme-assets folder.
5. Add required files to folders including style.css, images, script.js, etc.

## Update Repository
1. When adding a new feature create a separate branch to work in safely typing into the terminal "git branch 'name of required feature/update'".
2. Checkout the branch with "git checkout 'name of required feature/update'".
3. Make updates and test using "python -m http.server".
4. Once testing is complete add to Git staging area using "git add ."
5. Commit the changes and add a useful explanation of what action was done to track the history in GitHub using "git commit -m 'explanation of update'".
6. Once the feature is complete, fully tested, and ready to be added to the main branch first go to the main branch using "git checkout main".
7. Merge the feature branch into the main using "git merge 'name of required feature/update'".
8. Confirm merge was successful and then if it is not going to be re-used delete the feature branch using "git branch -d 'name of required feature/update'". (if deleting a branch with commits not merged to main delete with -D instead of -d)
9. Use "git push" to push the commits to GitHub. These will then appear in the live website if it has been set up in GitHub Pages.

## GitHub Pages
Deploy in GitHub Pages:
1. Log in to my GitHub and go to my Muscle-Map repository.
2. Access settings.
3. Under 'Code and Automation' go to pages.
4. Leave the source as Deploy from Branch.
5. Set Branch to Main.
6. Save.
7. Give GitHub a few minutes and the live URL is provided at the top of the GutHub Pages section of settings.
8. Any Git Pushes from the terminal whilst working on the Muscle-Map repository using Gitpod will now update in this live site.

# Credits
## Content
* Hamburger responsive nav-bar – Web Dev Simplified - https://www.youtube.com/watch?v=At4B7A4GOPg
* Outline border on call-to-action text - https://www.w3schools.com/css/css3_shadows.asp
* Structure of README.MD file - https://github.com/emilija-smitaite/milestone-project-1/blob/main/README.md

## Media 
* All images were obtained from Unsplash.
* Videos were all from Youtube - ScottHermanFitness
* Links to external websites
   - https://8fit.com/fitness/compound-vs-isolation-exercises-benefits-and-differences/#what-are-isolation-exercises
   - https://www.verywellfit.com/abdominal-muscles-anatomy-3120072#mntl-sc-block_1-0-6
   - https://en.wikipedia.org/
* Excerpts from external links  
   - https://www.verywellhealth.com/
   - https://my.clevelandclinic.org/



## Acknowledgements
* Thank to my Mentor (Spencer Barriball) for his feedback and guidance.
* The Code Institute Slack community for helping with any and all queries.
