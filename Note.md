# Folder Structure

- package.json have dependency and script required for the project
- package-lock.json ensures consistent installation of dependencies
- node modules in this directory all the node modules get installed when we run the creat react app command
- public directory contains three files
    - manifest.json this is related to progressive web app which is out of scop for this chapter
    - index.html the only html file in react it contains div tag with id as root the react app controlls this html via root id. developer has nothing to do with this html file.
- src directory most of the development work will be done here. Starting point of react app is index.js this index.js is having App component and dom element which is root which is present in index.html. Here App component rendered inside the root dom node
    - App.css helps for styling of App component and App.test.js is used for unit test
    - In the same way index.css for styling and index.js for taking control over root dom node
    - ServiceWorker.js is for pregressive app this is out of scope as of now

    