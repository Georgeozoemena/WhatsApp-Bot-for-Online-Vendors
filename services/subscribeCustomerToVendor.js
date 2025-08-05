const Customer = require('../models/Customer')
const Vendor = require('../models/Vendor')

async function subscribeCustomerToVendor(req, res) {
    const { customerId, vendorId } = res.body;
    const customer = await Customer.findById(customerId);
    const vendor = await Vendor.findById(vendorId);
    
    // Add vendorID to Customer's list of subscriptions, if not subscribed already
    if (!customer.subscribed_vendors.includes(vendorId)) {
        customer.subscribed_vendors.push(vendorId)
    }
    if (!vendor.subscribers.includes(customer.phone_number)) {
        vendor.subscribers.push(customer.phone_number)
    }

    // Save data to DB
    await customer.save();
    await vendor.save();

    // Returns success message
    return { message: 'Customer successfully subscribed to vendor.' }
}


module.exports = subscribeCustomerToVendor;