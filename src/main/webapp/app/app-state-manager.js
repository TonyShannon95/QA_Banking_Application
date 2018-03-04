"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("accountDetails", {
                url: "/accountDetails", 
                templateUrl: "app/feature/accountDetails/accountDetails.html"
        }).state("addAccount", {
                url: "/addAccount", 
                templateUrl: "app/feature/addAccount/addAccount.html"
    	}).state("updateAccount", {
            url: "/update",
            templateUrl: "app/feature/updateAccount/updateAccount.html",
            params: {account:null}
        })
    });
}());