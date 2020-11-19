// imported requirements

var connection = require("./config/connection.js");

var inquirer = require("inquirer");

var orm = require("./config/orm.js");

//functions for handling responses

function newDepartment() {

    inquirer.prompt(
        [{
            name: "name",
            type: "input",
            message: "enter new department name"
        }
        ]).then(response => {
            connection.query(`INSERT INTO department (deptname) VALUE (?)`
                ,[response.name]
                ,function (err, res) {
                    if (err) throw err;
                    connection.end();
                })
        });
    };
function newRoles() {
            inquirer.prompt(
                [
                    {
                        name: "job",
                        type: "input",
                        message: "enter name of new job"
                    },
                    {
                        name: "department",
                        type: "input",
                        message: "enter department id",
                    }
                ]).then(response => {
                    connection.query("INSERT INTO jobs (title, departmentid) VALUES (?,?)"
                        ,[response.job, response.department]
                        ,function (err, res) { if (err) throw err; });
                    connection.end();
                })};
function newEmployee() {
            inquirer.prompt(
                [
                    {
                        name: "first",
                        type: "input",
                        message: "enter employees first name"
                    },
                    {
                        name: "last",
                        type: "input",
                        message: "enter employees last name"
                    },
                    {
                        name: "job",
                        type: "input",
                        message: "enter employee role number"
                    }
                ]).then(response => { connection.query("INSERT INTO employee (firstname, lastname, jobid) VALUES (?, ?, ?)"
                        ,[response.first, response.last, response.job]
                        ,function (err, res) {
                            if (err) throw err;
                        });
                    connection.end();
                });
        }

function updateEmployee() { 
var employee = 'SELECT id, firstname, lastname FROM employee';
var job = 'SELECT id, title FROM job';

connection.query(employee, function (err, res) {
  if (err) throw err;
  const employees = res.map(({id, firstname, lastname}) => ({name: `${firstname} ${lastname}`, value: id}));

  connection.query(job, function (err, res) {
    if (err) throw err;
    const jobs = res.map(({id, title}) => ({name: title,value: id}));

    inquirer.prompt(
      [
         {
          name: "employeeUpdate",
          type: "list",
          message: "select employee to edit",
          choices: employees
        },
        {
          name: "employeeRole",
          type: "list",
          message: "select new job",
          choices: jobs
        }
      ]).then(response => { connection.query("UPDATE employee SET role_id = (?) WHERE id = (?)"
        ,[response.employeeUpdate, resonse.roleUpdate]
        ,function (err, res) {
        if (err) throw err;
         });
        connection.end();});
  });});
}



// javascript for prompt
inquirer.prompt(
    {
        type: "checkbox",
        name: "tracker",
        message: "select option",
        choices: [
            "add department",
            "add roles",
            "add employees",
            "view departments",
            "view roles",
            "view employees",
            "update employee roles",
        ]
    }).then(function (response) {
        // switch case statement to handle response
        switch (response.tracker[0]) {
            case "add department":
                newDepartment();
                break;
            case "add roles":
                newRoles();
                break;
            case "add employees":
                newEmployee();
                break;
            case "view departments":
                orm.viewAll("deptname", "department");
                break;
            case "view roles":
                orm.viewAll("title", "job");
                break;
            case "view employees":
                orm.viewAllEmployees()
                break;
            case "update employee roles":
                updateEmployee();
                break;
        }});