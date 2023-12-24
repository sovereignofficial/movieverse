## Features 

* Users need to be authenticated to use this app.
* Movies are recommended according to the user's favorited movies at the specialized feed page.
* Users can search every movies/tv shows/people by search input at the header and get redirected to the search results page.
* Users can see most populer movies at the popular movies page.
* Users can see details of the movie/tv show/person at the detail page.
* Users can share their comments to a movie/tv show/person
* Users can manage their favorited movies/tv shows/people in their account page.
* Users can update their data from the account page and upload a profile page.
* Users can decorate their account page using pins. The pins also affect their background image.
* Users can see their lates activities in their account page.

## Routes

Home => /
Movies => /movies?f=:genreId
Movie Details => /movie?m=:movieID
Search => /search?q=:searchQuery
Special Feed For User => /feed
Account => /account
Favorite Tv Shows => /account/tv
Favorite People => /account/people
Favorite Movies => /account/movies
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
* Carousels => Swiperjs
