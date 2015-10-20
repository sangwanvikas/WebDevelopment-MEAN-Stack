(function () {

    angular
    .module("WhiteBoardApp")
    .factory("CourseService", CourseService);

    function CourseService() {

        var courseData = [
       { title: "JAVArrrrrrrrrrrr", seats: 12, start: new Date() },
       { title: "C#", seats: 12, start: new Date() },
       { title: "Node JS", seats: 12, start: new Date() },
       { title: "Angular JS", seats: 12, start: new Date() }
        ]

        // here code goes for connection string, caching , fetching and sending back data to the DB etc. for CRUD operations etc.
        var service = {
            getAllCourses: getAllCourses

        };
        return service;

        
        function getAllCourses ()
        {
            // we can have AJAX call here to fetch the data. SO THIS IS A ASYNC call, so it is not going to return the courses right away.
            // And in the call back i'll pass you the data later on. Therefore HW says use call backs. TIll now we relly don't need it until we go to the call back 
            // pr premises.
            return courseData;
        }

    }

})();