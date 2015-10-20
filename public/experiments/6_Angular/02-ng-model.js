angular
    .module("WhiteBoardApp", [])
    .controller("ngClickController", ngClickController);

function ngClickController($scope) {
    
        $scope.hello = "This text is coming from the model set by the cotroller. model name is {{hello}}";

        $scope.clickMe = function (str) {
            $scope.model2_Sent_Through_Event_Handler = str;
        }

  


}