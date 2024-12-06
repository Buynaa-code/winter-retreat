#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Activity images - updating concert and coffee shop images
curl "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format" -o images/coffee_shop.jpg
curl "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format" -o images/movie_theater.jpg
curl "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&auto=format" -o images/park.jpg
curl "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format" -o images/concert.jpg

# Additional activity images - updating bowling and board games images
curl "https://images.unsplash.com/photo-1595928642581-f7cc69e51b71?w=800&auto=format" -o images/bowling.jpg
curl "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&auto=format" -o images/arcade.jpg
curl "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format" -o images/board_games.jpg

# Food images
curl "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format" -o images/sushi.jpg
curl "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format" -o images/pizza.jpg
curl "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format" -o images/burger.jpg
curl "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800&auto=format" -o images/ice_cream.jpg

# Additional food images
curl "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&auto=format" -o images/hotpot.jpg
curl "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format" -o images/korean_bbq.jpg
curl "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&auto=format" -o images/pasta.jpg
curl "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format" -o images/dessert.jpg

# Download destination images
curl "https://images.unsplash.com/photo-1599074914978-2946b69e5a4a?w=800&auto=format" -o images/khuvsgul.jpg
curl "https://images.unsplash.com/photo-1601901379058-2c3d15954590?w=800&auto=format" -o images/gobi.jpg
curl "https://images.unsplash.com/photo-1570882184607-5c3104577c67?w=800&auto=format" -o images/terelj.jpg
