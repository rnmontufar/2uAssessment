const mongoose = require('mongoose');
const invoiceSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	invoice_number: {type: Number, required: true},
	total: {type: String, required: true},
	currency: {type: String, required: true},
	invoice_date: {type:Date, required:true},
	due_date: {type:Date, required:true},
	vendor_name: {type:String, required:true},
	remittance_address: {type: String, required: true},
	status: {type:String, required: true}
});
module.exports = mongoose.model('Invoice', invoiceSchema,'invoices');