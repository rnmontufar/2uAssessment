const mongoose = require('mongoose');
const Invoice = require('../models/invoice');

module.exports = {
    show: (req, res, next) => {
        const stt = "pending";
        Invoice.find({ status: stt })
            .select('_id invoice_number total currency invoice_date due_date vendor_name remittance_address status')
            .exec()
            .then(docs => {
                const response = {
                    count: docs.length,
                    invoices: docs.map(doc => {
                        return {
                            _id: doc._id,
                            invoice_number: doc.invoice_number,
                            total: doc.total,
                            currency: doc.currency,
                            invoice_date: doc.invoice_date,
                            due_date: doc.due_date,
                            vendor_name: doc.vendor_name,
                            remittance_address: doc.remittance_address,
                            status: doc.status
                        }
                    })
                };
                res.status(200).json(response);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    create: (req, res, next) => {
        const invoice = new Invoice({
            _id: new mongoose.Types.ObjectId(),
            invoice_number: req.body.invoice_number,
            total: req.body.total,
            currency: req.body.currency,
            invoice_date: req.body.invoice_date,
            due_date: req.body.due_date,
            vendor_name: req.body.vendor_name,
            remittance_address: req.body.remittance_address,
            status: req.body.status
        });

        invoice.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'invoice submitted successfully',
                    createdInvoice: {
                        invoice_number: result.invoice_number,
                        total: result.total,
                        currency: result.currency,
                        invoice_date: result.invoice_date,
                        due_date: result.due_date,
                        vendor_name: result.vendor_name,
                        remittance_address: result.remittance_address,
                        status: result.status
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    changeStatu: (req, res, next) => {
        const id = req.body.invoiceId;
        const updateOps = req.body;
        delete updateOps._id
        Invoice.update({ _id: id }, { $set: { status: updateOps.status } })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Updated Succes'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
}