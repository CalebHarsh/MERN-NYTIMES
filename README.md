# NYT React Search

### Overview

 * A full stack MERN Application that allows user to search articles from New York times when provided a topic, a start date, and a end date. Saving those articles to come back and visit them later.

### Instructions

  * `/api/articles` (get) - your components will use this to query MongoDB for all saved articles

  * `/api/articles` (post) - your components will use this to save an article to the database

  * `/api/articles` (delete) - your components will use this to delete a saved article in the database

  * `*` (get) - will load your single HTML page (with ReactJS) in `client/build/index.html`. Make sure you put this after all other GET routes

  * The layout should include at least two React Components for each page `Home` and `Saved`.

  * **Home** - contains all of the JSX to be rendered on the homepage. This component contains other smaller components that renders plain HTML elements. This component is able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

  * **Saved** - Renders articles that are saved in the MongoDB and allows the user to visit the article's url or delete it from the MongoDB. This page is made up of multiple smaller components and JSX that renders plain HTML elements.

- - -

### Coming Soon

* Using React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.
  
  * Say you have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
  
  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

- - -

### Hosting on Heroku

[New York Times Search](https://enigmatic-oasis-47655.herokuapp.com)

- - -

