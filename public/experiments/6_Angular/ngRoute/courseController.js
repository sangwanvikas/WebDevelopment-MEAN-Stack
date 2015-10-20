(function () { 

angular
.module("WhiteBoardApp")
.controller("CourseController", CourseController);

function CourseController($scope, CourseService)
{
    $scope.helloCourse = "Hello from course controller.";
   
    // go through the service to get data
    $scope.courses = CourseService.getAllCourses();

    $scope.removeCourse = function(index){
        console.log(index);
        $scope.courseData = courseData.splice(index, 1);
    }
}

})();