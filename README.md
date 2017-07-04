# README


## Rational 

I had a problem. I like developing film, but I hate looking up the times every time I want to develop another roll of film.

## Solution

This is a simple application made to help me develop film.  It esentially uses times from http://www.digitaltruth.com/devchart.php by using nokogiri to scrape the times off that and then provides a good user experience that goes far beyond the charts on that site. It alerts the user when it is time to agitate and all the times for the chicals associated with black and white film development. 


## What I Delivered
<ul>
<li> A database that utilizes web scraping to rebuilt itself.
<li> Views that affect one another
<li> A UI based on google's material design
<li> An algorithm to alert the user when to agitate film
</ul>
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

