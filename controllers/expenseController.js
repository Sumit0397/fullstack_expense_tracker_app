const path = require('path');

const Expense = require("../models/expenseModel");

exports.getHomePage = (req,res,next) => {
    res.sendFile(path.join(__dirname ,  ".." , "public" , "views" , "index.html"));
}

exports.addExpense = (req,res,next) => {
    const category = req.body.category;
    const description = req.body.description;
    const amount = req.body.amount;

    console.log(category ,description,amount);
    Expense.create({
        category : category,
        description : description,
        amount : amount
    }).then(() => {
        console.log("Expense added !!");
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
    })
}

exports.getAllExpenses = (req,res,next) => {
    Expense.findAll()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.deleteExpense = (req,res,next) => {
    const id = req.params.id;
    Expense.findByPk(id)
    .then((expense) => {
        return expense.destroy();
    })
    .then(() => {
        console.log("expense deleted!!");
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.editExpense = (req,res,next) => {
    const id = req.params.id;
    const description = req.body.description;
    const category = req.body.category;
    const amount = req.body.amount;

    Expense.findByPk(id)
    .then((expense) => {
        expense.description = description;
        expense.category = category;
        expense.amount = amount;
        return expense.save();
    })
    .then(() => {
        console.log("expense updated!");
        res.redirect("/");
    })
    .catch((error) => {
        console.log(error);
    })
}