Artist.delete_all()
Album.delete_all()
Gig.delete_all()
Venue.delete_all()

a1 = Artist.create({name: "Oasis"})
a2 = Artist.create({name: "Justin Bieber"})

Album.create({artist: a1, title: "What's the Story Morning Glory"})
Album.create({artist: a2, title: "Never say never"})

v1 = Venue.create({name: "Hammersmith Odeon", location: "London"})
v2 = Venue.create({name: "Playhouse", location: "Edinburgh"})

Gig.create({price: 10, date: "2017-01-14", artist: a1, venue: v2})
Gig.create({price: 5, date: "2017-03-23", artist: a2, venue: v1})
