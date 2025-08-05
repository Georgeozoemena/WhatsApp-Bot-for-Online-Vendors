const Customer = require('../models/Customer')

async function subscribeCustomerToVendor(req, res) {
    const { customerId, vendorId } = res.body;

    // Subscribe customer
    const newCustomer = new Customer({...customerId})
    await newCustomer.save();
    
    // Add vendorID to Customer
        // Find vendor by ID
        // const 
}
