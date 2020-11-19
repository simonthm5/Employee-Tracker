var connection = require("./connection.js");
var orm = {

    viewAll: function(column, table) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [column, table], function (err, result) {
            if (err) throw err;
            console.table(result);
            connection.end();
        })
    },

    viewAllEmployees: function () {
        var queryString = "SELECT employee.firstname, employee.lastname, job.title, department.deptname FROM employee INNER JOIN job on employee.jobid=job.id INNER JOIN department on job.departmentid=department.id";
        connection.query(queryString, [column, table], function (err, result) {
            if (err) throw err;
            console.table(result);
            connection.end();
        });
    }

};

module.exports = orm;