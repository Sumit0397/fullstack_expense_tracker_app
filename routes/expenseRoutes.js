const express = require('express');

const expenseController = require('../controllers/expenseController');

const router = express.Router();

router.use(express.static("public"));

router.get("/" , expenseController.getHomePage);

router.post("/addExpense" , expenseController.addExpense);

router.get("/getExpense" , expenseController.getAllExpenses);

router.get("/deleteExpense/:id" , expenseController.deleteExpense);

router.post("/editExpense/:id" , expenseController.editExpense);

module.exports = router;