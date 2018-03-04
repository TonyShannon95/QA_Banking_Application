"use strict";

(function () {

    var UpdateAccountController = function (accountService, $log, $stateParams) {
        var vm = this;
        vm.firstName = $stateParams.account.firstName;
        vm.secondName = $stateParams.account.secondName;
        vm.accountNumber = $stateParams.account.accountNumber;
        vm.accountId = $stateParams.account.id;


        $log.log("Account controller created now");
        

        vm.UpdateThisAccount = function () {
            var curAccObj = { id: vm.accountId, firstName: vm.firstName, secondName: vm.secondName, accountNumber: vm.accountNumber };
            $log.log(curAccObj);
           accountService.updateAccount(curAccObj);
        }
    };

    angular.module('accountApp').controller('updateAccountController', ['accountService', '$log', '$stateParams', UpdateAccountController]);
}());