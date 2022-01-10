import Product from '../models/Product'

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body
    await newProduct = new Product({name, category, price, imgURL})
    const productSaved: 
    res.json('creating product')
}

export const getProducts = (req, res) => {
    const products = await Product.find();
    res.json(products)

}

export const getProduct= (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product)
}

export const updateProducById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        {
            new:true
        }
    );
    res.status(200).json(updatedProduct);
};


export const deleteProductById = (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(204).json();
}

export const 