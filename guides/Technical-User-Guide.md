#PLAS: Technical User Guide

##Links
 - PLAS: [http://mystaffdesk.usq.edu.au/moodle2/course/view.php?id=2018](http://mystaffdesk.usq.edu.au/moodle2/course/view.php?id=2018)

 - Git repo: [https://github.com/USQ-Media-Services/PLAS](https://github.com/USQ-Media-Services/PLAS)

 - LOR collection: [https://lor.usq.edu.au/usq/items/e465f410-17f1-494c-8ada-9fb1cb82c04d/1/](https://lor.usq.edu.au/usq/items/e465f410-17f1-494c-8ada-9fb1cb82c04d/1/)

 - Guides:
   - [Technical User Guide](https://gitcdn.xyz/repo/USQ-Media-Services/PLAS/master/guides/Technical-User-Guide.html)
   - [Functional User Guide](https://gitcdn.xyz/repo/USQ-Media-Services/PLAS/master/guides/Functional-User-Guide.html)

##Getting commit permission
To request commit permission please email: [Multimedia](mailto:Multimedia@usq.edu.au)
You can also make a pull request, that will be reviewed at the earliest convenice by a member of the Multimedia team.


##Prerequisite tools:
 - [NodeJS](https://nodejs.org/)/[io.js](https://iojs.org/en/index.html)
 - [Bower](http://bower.io/) (Can be installed by using npm: `npm install -g bower`)

##How to checkout the files:
Copy: `git clone https://github.com/USQ-Media-Services/PLAS.git plas` into command prompt/terminal/shell

##Post clone/checkout steps
After any pull/clone/checkout/revert always run `bower install` to ensure you have all required files.

##File Organization
Files are organized as such:
 - `guides` - Holds all guides (as Markdown)
 - `res` - Contains all resource files that are not called directly (.psd's, .ai's, unoptimized images, etc.)
 - `sys` - This is the primary source folder, and contains:
   - `js` - Holds all JavaScript filesD:\Dropbox\www\Work\2015\725-PLAS-changes\.git\hooks\post-receive.sample
   - `css` - Holds all Stylesheets
   - `img` - Holds all images
   - `templates` - Holds the templates for the frontpage
 - `index.html` - This is the Frontpage Manager.


##How does it work
The entire thing is handled by the so called Frontpage Manager. It is an angular app that templates the information, fetches any data from the appropriate places, then allows editing and saving.

##The 'magic'
The magic that lets this monolith work is in the main.js file (`sys > js > main.js`).
It contains all the angular controllers and environment adjusters.

##So whats really happening?
The basic flow is this:
 - Frontpage Manager (FM from here on) loads the source files
 - The FM then loads up certain moodle pages that contain base64 encoded JSON data (like an adhock database) see: runWhenReady() in main.js & `database()` in db.js.
 - Data is rendered out to the page, via Angular (see `sys > templates > *.html`)
 - User makes some edits and hits save, which calls `w.save()`
 - The templates are processed
 - All required libraries and stylesheets are process into [data urls](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs) and inlined into the navigation template.
 - All the now procced data is sent via [Jaxxy](https://github.com/schme16/jaxxy)'s (an XHR lib) mule (uses [postmessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to bypass CORS issues) back to moodle as a POST request, with all the data for each piece.