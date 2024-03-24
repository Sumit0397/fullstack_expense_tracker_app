const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require("./utils/database");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));

app.use(expenseRoutes);

app.use("/post" , expenseRoutes);

sequelize
.sync()
.then(() => {
    app.listen(4000);
})
.catch((err) => {
    console.log(err);
})