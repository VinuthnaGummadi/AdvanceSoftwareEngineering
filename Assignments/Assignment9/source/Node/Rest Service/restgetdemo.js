/**
 * Created by Marmik on 04/10/2016.
 */
var express = require('express');
var app = express();
var request = require('request');
var async = require("async");

app.get('/getpopularmovies', function (req, res) {
    var result={
        'movies': [],
    };
    var movie;
    request('https://api.themoviedb.org/3/discover/movie?primary_release_year=2017&popularity>50&original_language=en&api_key=606d616b503278cd9d123c76c7e0e15f', function (error,response,body) {
        if (error) {
            return console.log('Error:', error);
        }

        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        body = JSON.parse(body);
        movie = body.results;

        var lookup_list = [];


        for(var i=0;i<movie.length-1;i++)
        {
            lookup_list.push('https://api.themoviedb.org/3/movie/'+movie[i].id+'?api_key=606d616b503278cd9d123c76c7e0e15f');

        }

        var movie_description = new Array();

        async.map(lookup_list, function(url, callback) {
            // iterator function
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var body = JSON.parse(body);
                    movie_description.push(body);
                    callback(null, body);
                } else {
                    callback(error || response.statusCode);
                }
            });
        }, function(err, results) {
            // completion function
            if (!err) {
                // process all results in the array here
                console.log(results);
                for (var i = 0; i < results.length; i++) {

                    result.movies.push({'poster_path': movie[i].poster_path,
                        'id':movie[i].id,
                        'original_title':movie[i].original_title,
                        'popularity':movie[i].popularity,
                        'vote_count':movie[i].vote_count,
                        'vote_average':movie[i].vote_average,
                        'release_date':movie[i].release_date,
                        'details':[{
                            'adult':results[i].adult,
                            'backdrop_path':results[i].backdrop_path,
                            'belongs_to_collection_img1':results[i].belongs_to_collection_img1,
                            'belongs_to_collection_img2':results[i].belongs_to_collection_img2,
                            'budget':results[i].budget,
                            'homepage':results[i].homepage,
                            'original_title':results[i].original_title,
                            'overview':results[i].overview,
                            'popularity':results[i].popularity,
                            'poster_path':results[i].poster_path,
                            'release_date':results[i].release_date,
                            'status':results[i].status,
                            'vote_average':results[i].vote_average,
                            'vote_count':results[i].vote_count,
                        }]
                    });

                }

                res.contentType('application/json');
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.write(JSON.stringify(result));
                res.end();
            } else {
                // handle error here
            }
        });
    });
    console.log(result);
});



app.get('/getbestmovies', function (req, res) {
    var result={
        'movies': []
    };
    var movie;
    request('https://api.themoviedb.org/3/discover/movie?primary_release_year=2016&certification_country=US&certification=R&sort_by=vote_average.desc&api_key=606d616b503278cd9d123c76c7e0e15f', function (error, response, body) {
        if (error) {
            return console.log('Error:', error);
        }

        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        body = JSON.parse(body);
        movie = body.results;

        var lookup_list = [];


        for(var i=0;i<movie.length-1;i++)
        {
            lookup_list.push('https://api.themoviedb.org/3/movie/'+movie[i].id+'?api_key=606d616b503278cd9d123c76c7e0e15f');

        }

        var movie_description = new Array();

        async.map(lookup_list, function(url, callback) {
            // iterator function
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var body = JSON.parse(body);
                    movie_description.push(body);
                    callback(null, body);
                } else {
                    callback(error || response.statusCode);
                }
            });
        }, function(err, results) {
            // completion function
            if (!err) {
                // process all results in the array here
                console.log(results);
                for (var i = 0; i < results.length; i++) {

                    result.movies.push({'poster_path': movie[i].poster_path,
                        'id':movie[i].id,
                        'original_title':movie[i].original_title,
                        'popularity':movie[i].popularity,
                        'vote_count':movie[i].vote_count,
                        'vote_average':movie[i].vote_average,
                        'release_date':movie[i].release_date,
                        'details':[{
                            'adult':results[i].adult,
                            'backdrop_path':results[i].backdrop_path,
                            'belongs_to_collection_img1':results[i].belongs_to_collection_img1,
                            'belongs_to_collection_img2':results[i].belongs_to_collection_img2,
                            'budget':results[i].budget,
                            'homepage':results[i].homepage,
                            'original_title':results[i].original_title,
                            'overview':results[i].overview,
                            'popularity':results[i].popularity,
                            'poster_path':results[i].poster_path,
                            'release_date':results[i].release_date,
                            'status':results[i].status,
                            'vote_average':results[i].vote_average,
                            'vote_count':results[i].vote_count,
                        }]
                    });

                }

                res.contentType('application/json');
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.write(JSON.stringify(result));
                res.end();
            } else {
                // handle error here
            }
        });
    });
    console.log(result);
});

app.get('/getkidsmovies', function (req, res) {
    var result={
        'movies': []
    };
    var movie;
    request('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=606d616b503278cd9d123c76c7e0e15f', function (error, response, body) {
        if (error) {
            return console.log('Error:', error);
        }

        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        body = JSON.parse(body);
        movie = body.results;

        var lookup_list = [];


        for(var i=0;i<movie.length-1;i++)
        {
            lookup_list.push('https://api.themoviedb.org/3/movie/'+movie[i].id+'?api_key=606d616b503278cd9d123c76c7e0e15f');

        }

        var movie_description = new Array();

        async.map(lookup_list, function(url, callback) {
            // iterator function
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var body = JSON.parse(body);
                    movie_description.push(body);
                    callback(null, body);
                } else {
                    callback(error || response.statusCode);
                }
            });
        }, function(err, results) {
            // completion function
            if (!err) {
                // process all results in the array here
                console.log(results);
                for (var i = 0; i < results.length; i++) {

                    result.movies.push({'poster_path': movie[i].poster_path,
                        'id':movie[i].id,
                        'original_title':movie[i].original_title,
                        'popularity':movie[i].popularity,
                        'vote_count':movie[i].vote_count,
                        'vote_average':movie[i].vote_average,
                        'release_date':movie[i].release_date,
                        'details':[{
                            'adult':results[i].adult,
                            'backdrop_path':results[i].backdrop_path,
                            'belongs_to_collection_img1':results[i].belongs_to_collection_img1,
                            'belongs_to_collection_img2':results[i].belongs_to_collection_img2,
                            'budget':results[i].budget,
                            'homepage':results[i].homepage,
                            'original_title':results[i].original_title,
                            'overview':results[i].overview,
                            'popularity':results[i].popularity,
                            'poster_path':results[i].poster_path,
                            'release_date':results[i].release_date,
                            'status':results[i].status,
                            'vote_average':results[i].vote_average,
                            'vote_count':results[i].vote_count,
                        }]
                    });

                }

                res.contentType('application/json');
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.write(JSON.stringify(result));
                res.end();
            } else {
                // handle error here
            }
        });
    });
    console.log(result);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})