

















const handleAddToCart = (e) => {
    let productId = e.target.value;
    let product = initialProducts.find((prod) => prod._id === productId)
    if (product) {
        product.disponibles = product.disponibles - 1
    }
    const productToAdd = { producto: product, cantidad: 1 };
    addProductToCart(productToAdd.producto, productToAdd.cantidad);
}
