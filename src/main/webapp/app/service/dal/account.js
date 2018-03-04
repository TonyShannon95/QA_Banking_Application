"use strict";

(function () {

    function AccountDal (dal,$log) {

        this.getAccounts = function () {
        	$log.log("Account dal get accounts");
            return dal.http.GET("rest/account/json");
        };

        this.saveAccount = function (accSave) {
            return dal.http.POST("rest/account/json", accSave);
        };

        this.updateAccount = function (accUpdate) {
            return dal.http.PUT("rest/account/json", accUpdate);
        };

        this.deleteAccount = function (accountToDelete) {
        console.log(accountToDelete.id);
            return dal.http.DELETE("rest/account/json/", accountToDelete);
        };
    }
    
    angular.module("accountApp").service("accountDal", ["dal",'$log', AccountDal]);
}());