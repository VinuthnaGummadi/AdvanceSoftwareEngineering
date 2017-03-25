/**
 * Created by vinuthna on 05-02-2017.
 */

function onloadFunction() {
    gapi.client.setApiKey('AIzaSyCmCyf6ZSQ13JUvsEqv32zRWghE0PF28KA');
    gapi.client.load('plus','v1',function () {

    });


    FB.getLoginStatus(function (response) {

        if(response.status === 'connected'){
            //we are connected


        }else  if(response.status === 'not_authorized'){
            // not auth
        }else{
            // not loged in
        }
    })


}

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl : 'home.html'
    })
        .when('/login',{
            templateUrl : 'login.html'
        })
        .when('/home',{
            templateUrl : 'home.html'
        })
        .when('/single',{
            templateUrl : 'single.html'
        })
        .otherwise({ redirectTo : '/'});
});

myApp.controller('mycontroller',['$scope','$location','$http', function ($scope,$location,$http) {

    $scope.facebookLoginStatus=true;

    $scope.gmail = {
        username: "",
        email:""
    };
    $scope.onGoogleLogin = function () {

        var parms = {
            'clientid':'907223373330-t6rlh53dqkq6cjv2tmh8fsh6sncschj7.apps.googleusercontent.com',
            'cookiepolicy' : 'single_host_origin',
            'immediate': false,
            'callback' : function (result) {
                if(result['status']['signed_in']){
                    console.log("GAPI "+gapi);
                    console.log("GAPI CLIENT" + gapi.client);
                    console.log("gapi.client.plus" + gapi.client.plus);
                    var request = gapi.client.plus.people.get({
                        'userId' : 'me'
                    });
                    request.execute(function (resp) {
                        $scope.$apply(function () {
                            $scope.gmail.username = resp.displayname;
                            $scope.gmail.email = resp.emails[0].value;
                            console.log(resp.displayname);
                        });
                    });
                }
            },
            'approvalprompt' : 'force',
            'scope':'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };

        gapi.auth.signIn(parms);
    }

    $scope.facebook = {
        username: "",
        email:""
    };

    $scope.onFBLogin = function () {

        FB.login(function (response) {
            if(response.authResponse){
                FB.api('/me' , 'GET', {fields: 'email, first_name, name, id'}, function (response) {
                    $scope.$apply(function () {
                        $scope.facebook.username = response.name;
                        $scope.facebook.email = response.email;
                        console.log(response.name);
                        $scope.facebookLoginStatus=false;
                        $scope.facebookLogoutStatus=true;
                        $location.path('home');
                    });
                });
            }else{
                //error
            }

        }, {
            scope : 'email, user_likes',
            return_scopes: true
        });

    }

    $scope.onFBLogout = function () {
        FB.logout(function(response) {

        });
        $scope.facebookLoginStatus=true;
        $scope.facebookLogoutStatus=false;
        $scope.facebook.username = "";
        $scope.facebook.email = "";
        $location.path('home');
    }

    $scope.navigateLogin = function () {
        $location.path('login');
    }
    $scope.latestMovieList = new Array();
    $scope.bestMovieList = new Array();
    $scope.kidsMovieList = new Array();

   $http.get('http://localhost:8081/getpopularmovies')
       .then(function (response) {

           if (response.data.movies != null && response.data.movies != undefined ) {
               for (var i = 0; i < response.data.movies.length; i++) {
                   $scope.latestMovieList[i] = {
                       "poster_path": response.data.movies[i].poster_path,
                       "id": response.data.movies[i].id,
                       "original_title":response.data.movies[i].original_title,
                       "popularity":response.data.movies[i].popularity,
                       "vote_count":response.data.movies[i].vote_count,
                       "vote_average":response.data.movies[i].vote_average,
                       "release_date":response.data.movies[i].release_date,
                       "adult":response.data.movies[i].details[0].adult,
                       "backdrop_path":response.data.movies[i].details[0].backdrop_path,
                       "belongs_to_collection_img1":response.data.movies[i].details[0].belongs_to_collection_img1,
                       "belongs_to_collection_img2":response.data.movies[i].details[0].belongs_to_collection_img2,
                       "budget":response.data.movies[i].details[0].budget,
                       "homepage":response.data.movies[i].details[0].homepage,
                       "overview":response.data.movies[i].details[0].overview,
                       "status":response.data.movies[i].details[0].status

                   };
               }
           }
       }).then($http.get('http://localhost:8081/getbestmovies')
       .then(function (response) {

           if (response.data.movies != null && response.data.movies != undefined ) {
               for (var i = 0; i < response.data.movies.length; i++) {
                   $scope.bestMovieList[i] = {
                       "poster_path": response.data.movies[i].poster_path,
                       "id": response.data.movies[i].id,
                       "original_title":response.data.movies[i].original_title,
                       "popularity":response.data.movies[i].popularity,
                       "vote_count":response.data.movies[i].vote_count,
                       "vote_average":response.data.movies[i].vote_average,
                       "release_date":response.data.movies[i].release_date,
                       "adult":response.data.movies[i].details[0].adult,
                       "backdrop_path":response.data.movies[i].details[0].backdrop_path,
                       "belongs_to_collection_img1":response.data.movies[i].details[0].belongs_to_collection_img1,
                       "belongs_to_collection_img2":response.data.movies[i].details[0].belongs_to_collection_img2,
                       "budget":response.data.movies[i].details[0].budget,
                       "homepage":response.data.movies[i].details[0].homepage,
                       "overview":response.data.movies[i].details[0].overview,
                       "status":response.data.movies[i].details[0].status
                   };
               }
           }
       })).then($http.get('http://localhost:8081/getkidsmovies')
       .then(function (response) {

           if (response.data.movies != null && response.data.movies != undefined ) {
               for (var i = 0; i < response.data.movies.length; i++) {
                   $scope.kidsMovieList[i] = {
                       "poster_path": response.data.movies[i].poster_path,
                       "id": response.data.movies[i].id,
                       "original_title":response.data.movies[i].original_title,
                       "popularity":response.data.movies[i].popularity,
                       "vote_count":response.data.movies[i].vote_count,
                       "vote_average":response.data.movies[i].vote_average,
                       "release_date":response.data.movies[i].release_date,
                       "adult":response.data.movies[i].details[0].adult,
                       "backdrop_path":response.data.movies[i].details[0].backdrop_path,
                       "belongs_to_collection_img1":response.data.movies[i].details[0].belongs_to_collection_img1,
                       "belongs_to_collection_img2":response.data.movies[i].details[0].belongs_to_collection_img2,
                       "budget":response.data.movies[i].details[0].budget,
                       "homepage":response.data.movies[i].details[0].homepage,
                       "overview":response.data.movies[i].details[0].overview,
                       "status":response.data.movies[i].details[0].status
                   };
               }
           }
       }));

    $scope.loadSingle = function (movie) {

                    $scope.adult= movie.adult;
                    $scope.backdrop_path= movie.backdrop_path;
                    $scope.belongs_to_collection_img1=movie.belongs_to_collection.poster_path;
                    $scope.belongs_to_collection_img2=movie.belongs_to_collection.backdrop_path;
                    $scope.budget=movie.budget;
                    $scope.homepage=movie.homepage;
                    $scope.original_title=movie.original_title;
                    $scope.overview=movie.overview;
                    $scope.popularity=movie.popularity;
                    $scope.poster_path=movie.poster_path;
                    $scope.release_date=movie.release_date;
                    $scope.status=movie.status;
                    $scope.vote_average=movie.vote_average;
                    $scope.vote_count=movie.vote_count;

                    $location.path('single');

    }


}]);