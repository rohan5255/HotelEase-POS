const mongoose = require("mongoose");
const moment = require("moment-timezone");

const billSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerNumber: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
  cartItems: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    default: moment().format("DD-MMM-YYYY HH:mm:ss").toString(),
  },
});

const Bills = mongoose.model("bills", billSchema);

module.exports = Bills;
