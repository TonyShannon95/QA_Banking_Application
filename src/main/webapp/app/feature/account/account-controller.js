"use strict";

(function() {

    var AccountController =  function(accountService, $log, $state) {
        
    	$log.log("Account Controller Created");
    	var vm = this;
        
        vm.isHidden = false;
        
        vm.accountDel;

        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        vm.deleteAccount = function(customerId){
        	
        	var myId={id:customerId}
        	console.log(customerId);
        	
        	accountService.deleteAccount(myId);
        };
        
        vm.update = function(account)
        {
        	$state.go('updateAccount', {account:account});
        };
       

        
        function init() {
        	accountService.getAccounts().then(function (results) {
           	vm.accounts = results;
           	$log.log("In the account controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();

            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log','$state', AccountController]);
}());