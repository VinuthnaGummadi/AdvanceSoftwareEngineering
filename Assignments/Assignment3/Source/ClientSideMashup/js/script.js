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
   $http.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=2017&popularity>50&original_language=en&api_key=606d616b503278cd9d123c76c7e0e15f')
       .then(function (response) {

           if (response.data != null && response.data.results != null && response.data.results != undefined ) {
               for (var i = 0; i < response.data.results.length; i++) {
                   $scope.latestMovieList[i] = {
                       "poster_path": response.data.results[i].poster_path,
                       "id": response.data.results[i].id,
                       "original_title":response.data.results[i].original_title,
                       "popularity":response.data.results[i].popularity,
                       "vote_count":response.data.results[i].vote_count,
                       "vote_average":response.data.results[i].vote_average,
                       "release_date":response.data.results[i].release_date
                   };
               }
           }
       });

    $scope.bestMovieList = new Array();
    $http.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=2016&certification_country=US&certification=R&sort_by=vote_average.desc&api_key=606d616b503278cd9d123c76c7e0e15f')
        .then(function (response) {

            if (response.data != null && response.data.results != null && response.data.results != undefined ) {
                for (var i = 0; i < response.data.results.length; i++) {
                    $scope.bestMovieList[i] = {
                        "poster_path": response.data.results[i].poster_path,
                        "id": response.data.results[i].id,
                        "original_title":response.data.results[i].original_title,
                        "popularity":response.data.results[i].popularity,
                        "vote_count":response.data.results[i].vote_count,
                        "vote_average":response.data.results[i].vote_average,
                        "release_date":response.data.results[i].release_date
                    };
                }
            }
        });

        $scope.kidsMovieList = new Array();
    $http.get('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=606d616b503278cd9d123c76c7e0e15f')
        .then(function (response) {

            if (response.data != null && response.data.results != null && response.data.results != undefined ) {
                for (var i = 0; i < response.data.results.length; i++) {
                    $scope.kidsMovieList[i] = {
                        "poster_path": response.data.results[i].poster_path,
                        "id": response.data.results[i].id,
                        "original_title":response.data.results[i].original_title,
                        "popularity":response.data.results[i].popularity,
                        "vote_count":response.data.results[i].vote_count,
                        "vote_average":response.data.results[i].vote_average,
                        "release_date":response.data.results[i].release_date
                    };
                }
            }
        });

    $scope.loadSingle = function (movieId) {
        $http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=606d616b503278cd9d123c76c7e0e15f')
            .then(function (response) {

                $scope.genress="";
                if (response.data != null && response.data != undefined ) {
                    for(var i=0; i< response.data.genres.length;i++){
                        $scope.genress=$scope.genress+","+response.data.genres[i].name;
                    }
                    console.log(response.data);
                    $scope.adult= response.data.adult;
                    $scope.backdrop_path= response.data.backdrop_path;
                    $scope.belongs_to_collection_img1=response.data.belongs_to_collection.poster_path;
                    $scope.belongs_to_collection_img2=response.data.belongs_to_collection.backdrop_path;
                    $scope.budget=response.data.budget;
                    $scope.genre=$scope.genress;
                    $scope.homepage=response.data.homepage;
                    $scope.original_title=response.data.original_title;
                    $scope.overview=response.data.overview;
                    $scope.popularity=response.data.popularity;
                    $scope.poster_path=response.data.poster_path;
                    $scope.release_date=response.data.release_date;
                    $scope.status=response.data.status;
                    $scope.vote_average=response.data.vote_average;
                    $scope.vote_count=response.data.vote_count;

                    $location.path('single');
                }
            });

    }


}]);