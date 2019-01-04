

# KINGS

***It is currently under heavy construction***, so please bear with us and check back frequently!

[Live!](https://kings-ja.herokuapp.com/)
 * Please note the live site is currently on Heroku Hobby Dynos, so please allow a couple seconds for KINGS to get up and running *
  
KINGS is a single-page web application inspired by Etsy. It is a local-search service application that allows users to write reviews and search businesses. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.



## Features


![alt text](https://github.com/jonathanahn95/KINGS/blob/master/app/assets/images/readme1.png "Logo Title Text 1")

A visitor to KINGS can browse all available products without logging in. In addition, they have the ability to navigate the site as a Guest Demo by logging in as a Guest user. Users must be logged in as a Guest user or create an account to add items to their cart and make purchases


### Search Filters
![alt text](https://github.com/jonathanahn95/KINGS/blob/master/app/assets/images/readme2.png "Logo Title Text 1")


Users have the ability to filter their products by selecting which filter options they would like to filter by.

``` javascript
  generateQuery(nextState) {
    const queries = Object.keys(nextState);
    let queryString = "";
    queries.forEach(element => {
      let querySplit = element.split(" ");
      let query = querySplit[querySplit.length - 1];
      queryString += `${query}=(${nextState[element]})&`;
    });
    return queryString;
  }
  ```
  
 KINGS stores the filter options in state as an array. When a user clicks on a filter, an  `onClick` event handler is triggered which then adds the information by pushing into the array. It then generates a query string that makes an action call to the server on `componentDidUpdate`.
