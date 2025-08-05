const Vendor = require('../models/Vendor')
const Product = require('../models/Product');


async function notifyCustomers(vendorId, newProduct){
    try {
        const vendor = await Vendor.findById(vendorId);

        const message = `${newProduct.name} is now available! \n${newProduct.description} \n${newProduct.img_url}`
        
        for (const customers_phone_number of vendor.customers_phone_number) {
            await sendWhatsAppMessage(customers_phone_number, message);
        };
    } catch(error) {}
}

module.exports = notifyCustomers