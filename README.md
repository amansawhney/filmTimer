# README


## Rational 

I had a problem. I like developing film, but I hate looking up the times every time I want to develop another roll of film.

## Solution

This is a simple application made to help me develop film.  It esentially uses times from http://www.digitaltruth.com/devchart.php by using nokogiri to scrape the times off that and then provides a good user experience that goes far beyond the charts on that site. It alerts the user when it is time to agitate and all the times for the chicals associated with black and white film development. 


## What I Delivered

* A database that utilizes web scraping to rebuilt itself.
* Views that affect one another
* A UI based on google's material design
* An algorithm to alert the user when to agitate film

## Project Details

* Tasks: Web Scraping, Ruby on Rails, Database Creation, Database Querying, UX/UI
* Client: Myself

## App Summary

The Massive Dev Chart is the world's largest film development chart. It contains development times for most (over 18,000) combinations of black and white films and developers.

This Web Application makes the use of that chart far easier by providing a basic UI to the chart. It not only provides the user with the time for development but also alerts them when to agitate, and the timings for each chemical.


Ruby version: 2.2.3p173

### Database creation
```ruby 
rake db:setup
```

* Database initialization
```ruby 
rake db:migrate
rake db:seed
```

* To RUN IT
```ruby 
rails s
```

* ...


