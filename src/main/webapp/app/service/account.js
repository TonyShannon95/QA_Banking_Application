"use strict";

(function () {

    
    function AccountService ($log,accountDal) {

        this.getAccounts = function()
        {
        	$log.log("Account service get services");
        	return accountDal.getAccounts();
        };
        
        this.updateAccount = function(accUpdate)
        {
        	$log.log("Account service get Details");
        	$log.log(accUpdate);
        	return accountDal.updateAccount(accUpdate);
       
        };
        
        this.deleteAccount = function(accountDel)
        {
        	$log.log("Delete Account");
        	$log.log(accountDel);
        	return accountDal.deleteAccount(accountDel);
        };
        
        this.saveAccount = function(accSave)
        {
        	$log.log(accSave);
            return accountDal.saveAccount(accSave);
        };;
        
        
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());