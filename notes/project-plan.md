# Binge Watch Bestie

## Functionality

MVP
[ ] Sign Up / In 
[ ] Search for Videos
[ ] API Call to Guidebox 
[ ] Return Availabilities
[ ] Save Videos List

Advanced
[ ] OAuth using Stormpath 
[ ] Get Netflix Data via Netflix Roulette 
[ ] 


Architecture 
- Mongo/Mongoose
- Node/Express
- Angular 
- CSS

## MoSCoW

Must Have
[ ] Set up server 
[ ] Set up user database
[ ] API call 
[ ] Set up user 
[ ] Login Page 

Should Have
[ ] User Authentication 
[ ] User 
[ ] Save movie to list  

Could Have
[ ] Password encryption 
[ ] 

Won’t Have (but would like in future)
[ ] Netflix data 
[ ] OAuth


Files: 
  Client: 
    
    App:  
      Login // authorization and sign up 
        register.html 
        signin.html
        authController.js

      Search 
        search.html
        searchController.js  // manage the data that is printed to html

      List
        list.html 
        listController.js

      Services // code that makes network calls to API 
        authServices.js
        searchServices.js
        listServices.js
    
    Libraries

    Styles
      styles.css

    index.html 

  Server

    Controllers // the logic that is run for any API endpoint/call 
      Login
      Search 
      Save 
      View the List 

    Config
      routes.js // routes url page renders 
      
      userModel.js 

    Services
      userModel.js


Remaining To-Dos 
- look up shows 
- print data as images 
- save movie list 


