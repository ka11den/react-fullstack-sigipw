import Product from '../models/Product.js'

export const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        next(err)
    }
}

export const putProduct = async (req, res, next) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateProduct)
    } catch (err) {
        next(err)
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const products = await Product
          .find({title: { $regex: req.params.id, $options: "i"}})
          .limit(20)
        res.status(200).json(products)
    } catch (err) {
        next(err)
    }
}

export const getAllProduct = async (req, res, next) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
        next(err)
    }
}

export const delteProduct = async (req, res, next) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Продукт был удален")
    } catch (err) {
        next(err)
    }
}