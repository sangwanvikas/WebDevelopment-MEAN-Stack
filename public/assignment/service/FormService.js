(function () {
    "use strict";

    angular
    .module("FormBuilderApp")
    .factory("FormService", FormServiceFunction);

    function FormServiceFunction() {

        var forms = [
            { id: 1, userid: 1, formname: "formname1" },
            { id: 21, userid: 2, formname: "formname21" },
            { id: 22, userid: 2, formname: "formname22" },
            { id: 23, userid: 2, formname: "formname23" },
            { id: 3, userid: 3, formname: "formname3" }
        ];

        var service = {
            createFormForUser: CreateFormForUserFunction,
            findAllFormsForUser: FindAllFormsForUserFunction,
            deleteFormById: DeleteFormByIdFunction,
            updateFormById: UpdateFormByIdFunction
        }
        return service;

        // Accepts parameters user id, form object, and callback function
        // Adds property called id with unique guid
        // Adds property called userid equal to user id parameter
        // Adds new form to local array of forms
        // Calls back with new form
        function CreateFormForUserFunction(userId, newForm, callback) {
            newForm.id = getGUID();
            forms.push(newForm);
        }

        function getGUID() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }

        // Accepts parameter user id, and callback function
        // Iterates over the array of current forms looking for forms whose user id is parameter user id
        // Calls back with found forms for user id parameter, empty array otherwise
        function FindAllFormsForUserFunction(userId, callback) {
            var formsForGivenUserId = [];
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].userid == userId) {
                    formsForGivenUserId.push(forms[i]);
                }
            }
            return formsForGivenUserId;
        }

        // Accepts parameter form id and callback function
        // Iterates over array of forms looking for form whose id is form id parameter
        // If found, removes form from current array of forms
        // Calls back with remaining array of forms
        function DeleteFormByIdFunction(formId, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].id == formId) {
                    forms.splice(i, 1);
                }
            }
        }

        //Accepts parameter form id, new form object, and callback function
        //Iterates over array of forms looking for form whose id is form id parameter
        //If found, updates form object with new form values
        //Calls back with update form
        function UpdateFormByIdFunction(formId, newForm, callback) {
            console.log(forms);
            console.log("form id is" + formId);
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].id == formId) {
                    forms[i].formname = newForm.formname;
                    console.log(forms[i]);
                    // break
                }
            }
        }
    }

})();