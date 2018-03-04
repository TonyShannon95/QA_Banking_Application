(function() {

    var AddAccountController =  function(accountService, $log) {
        
    	var vm = this;
    	
    	vm.currentFirstN;
   		vm.currentSecondN;  
   		vm.currentAccountN;
    	       
  
    

         
         vm.addThemDetailsIn = function(firstName, SecondName, accNum)
         {
         	vm.currentFirstN = firstName;
  	 		vm.currentSecondN = SecondName;
   			vm.currentAccountN = accNum;
   			
   			console.log(vm.currentFirstN +" "+ vm.currentSecondN +" "+ vm.currentAccountN);
   			
   			vm.newAccount = {firstName: vm.currentFirstN,
        				secondName: vm.currentSecondN,
        				accountNumber: vm.currentAccountN};
        				
        	console.log(vm.newAccount);
        	
        	accountService.saveAccount(vm.newAccount).then(function (results) {
        	
        	console.log("Success");
        	console.log(vm.newAccount);
           	vm.accounts = results;

           	$log.log("Result is: ");
        	$log.log(JSON.stringify(vm.accounts));
        	
        	
            }, function (error) {
                vm.error = true;
                vm.errorMessage = accountnotcreated;
            });
             $log.log(vm.newAccount);
   			
         
         }
       };  

    angular.module('accountApp').controller('addAccountController',['accountService','$log', AddAccountController]);
}());