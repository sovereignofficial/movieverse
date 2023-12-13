## Features 

* Users need to be authenticated to use this app.
* Movies, series, tv shows are recommended according to the user's favorited movies/series/tv-shows at the specialized feed page.
* Users can search every movies, series and tv shows by search input at the header and get redirected to the search results page.
* Users can update their data from the account page and upload a profile page.
* Users can see most populer movies at the popular movies page.
* Users can see details of the movie at the movie details page.
* Users can manage their favorited movies in their account page.

## Routes

Home => /
Movies => /movies?f=:genreId
Movie Details => /movie?m=:movieID
Search => /search?q=:searchQuery
Special Feed For User => /feed
Account => /account 
Favorited Movies => /favorites
Login => /auth/login
Register => /auth/register

## Technology Stack

* Framework => React
* Language => TypeScript
* Global State Management => Zustand
* Remote State Management => React Query
* Style => Tailwind CSS
* API => TMDB API, Supabase
* Database => Supabase
* Router => React Router
* Animation => Framer Motion
* Icons => React Icons
* Video Player => React Player
