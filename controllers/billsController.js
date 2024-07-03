const billsModel = require("../models/billsModel");

//add items
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    res.send("something went wrong");
  }
};

//get blls data
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {}
};

//delete blls data
const deleteBillController = async (req, res) => {
  try {
    await billsModel.findOneAndDelete({ _id: req.body.itemId });
    res.status(200).send("Bills Deleted Successfully !");
  } catch (error) {}
};

module.exports = {
  addBillsController,
  getBillsController,
  deleteBillController,
};
