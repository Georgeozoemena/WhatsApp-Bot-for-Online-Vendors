const Vendor = require('../models/Vendor');
const Product = require('../models/Product');
const notifyCustomers = require('../services/notifyCustomers')


async function addNewProduct(req, res) {
    const { vendorId, productData } = req.body;

    try {
        // Create a new product
        const newProduct = new Product({...productData, is_new: true});
        // Save to DB
        await newProduct.save();

        // Add product to vendor's product_list
        const vendor = await Vendor.findById(vendorId); // Find vendor by Id
        if (!vendor) throw new Error('Vendor not found') // Throws an error, fi vendor is not found

        vendor.product_list.push(newProduct._id); // Adds to product_list
        await vendor.save()

        // Notify customers for new products
        await notifyCustomers(vendorId, newProduct);
        // Success Message
        res.status(201).json({message: 'Product added successfully, Customer notified'})

    } catch(error) {
        // Error message, retrieving from server
        res.status(500).json({error: err.message})
        console.error('Error adding new product', error.message)
    }
}