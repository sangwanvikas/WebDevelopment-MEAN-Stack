(function () {
    "use strict";

    angular
        .module("FormBuilderApp")
        .controller("FormController", FormControllerFunction);

    function FormControllerFunction($scope, FormService) {
        console.log("heyy");
        $scope.forms = FormService.findAllFormsForUser(2) // id needs to replaced with the logged in user's id
        //console.log($scope.forms);
        var selectedForm = {};


        $scope.addForm = function (newFormName) {
            console.log(newFormName);
            var newFormObj = { userid: 2, formname: newFormName }; // userid needs to be replaced by the id of logged in user
           FormService.createFormForUser(2, newFormObj);

            $scope.forms = FormService.findAllFormsForUser(2) // id needs to replaced with the logged in user's id
            $scope.formName = "";
            //console.log($scope.forms);
        }

        $scope.selectForm = function (index) {
            $scope.formName = $scope.forms[index].formname;
            selectedForm = $scope.forms[index];
            //console.log(selectedForm);
        }

        $scope.updateForm = function (updatedFormName) {
            if (selectedForm != undefined && selectedForm.userid != undefined && selectedForm.id != undefined) {
                var updatedFormObject = { id: selectedForm.id, formid: selectedForm.userid, formname: updatedFormName };
                $scope.forms = FormService.updateFormById(selectedForm.id, updatedFormObject) // id needs to replaced with the logged in user's id
                $scope.formName = "";

                $scope.forms = FormService.findAllFormsForUser(2) // id needs to replaced with the logged in user's id
                console.log($scope.forms);
            }
            else {
                alert("select a form to edit");
            }
        }


        $scope.removeForm = function (index) {
            console.log(index);
            console.log($scope.forms[index]);
            FormService.deleteFormById($scope.forms[index].id);

            $scope.forms = FormService.findAllFormsForUser(2) // id needs to replaced with the logged in user's id
            //console.log($scope.forms);
        }
    }
})();