import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = ({ products, addToCart }) => {
    const [filters, setFilters] = useState({
        category: [],
        discount: [],
        price: [],
        age: []
    });

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [shortlist, setShortlist] = useState([]);

    useEffect(() => {
        let filtered = products;

        if (filters.category.length > 0) {
            filtered = filtered.filter(product => filters.category.includes(product.category));
        }

        if (filters.discount.length > 0) {
            filtered = filtered.filter(product => filters.discount.includes(product.discount.toString()));
        }
 
        if (filters.price.length > 0) {
            filtered = filtered.filter(product => {
                const priceRanges = filters.price.map(range => range.split('-').map(Number));
                return priceRanges.some(([min, max]) => {
                    const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
                    if (max) {
                        return discountedPrice >= min && discountedPrice <= max;
                    } else {
                        return discountedPrice >= min;
                    }
                });
            });
        }

        if (filters.age.length > 0) {
            filtered = filtered.filter(product => filters.age.includes(product.age.toString()));
        }

        setFilteredProducts(filtered);
    }, [filters, products]);

    const handleCheckboxChange = (key, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: prevFilters[key].includes(value)
                ? prevFilters[key].filter(val => val !== value)
                : [...prevFilters[key], value]
        }));
    };

  
    const handleAddToCart = (product) => {
        const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
        addToCart({ ...product, price: discountedPrice }); 
        toast.success(`${product.name} has been added to the cart!`);
    };

    const handleShortlist = (product) => {
        setShortlist(prevShortlist => [...prevShortlist, product]);
        toast.info(`${product.name} has been shortlisted!`);
    };

    const calculateDiscountedPrice = (price, discount) => {
        return price - (price * discount / 100);
    };

    return (
        <div className="product-page">
            <div className="filters">
                <div className="filter-section">
                    <h3>Category</h3>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('category', 'Boys Topwear')} />
                            Boys Topwear
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('category', 'Girls Topwear')} />
                            Girls Topwear
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('category', 'Footwear')} />
                            Footwear
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('category', 'Toys')} />
                            Toys
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('category', 'Accessories')} />
                            Accessories
                        </label>
                    </div>
                </div>

                <div className="filter-section">
                    <h3>Discount</h3>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '10')} />
                            10% off
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '20')} />
                            20% off
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '30')} />
                            30% off
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '40')} />
                            40% off
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '50')} />
                            50% off
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '60')} />
                            60% off
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '70')} />
                            70% off
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('discount', '80')} />
                            80% off
                        </label>
                    </div>
                </div>

                <div className="filter-section">
                    <h3>Price Range</h3>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('price', '0-250')} />
                            0 - 250
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('price', '250-500')} />
                            250 - 500
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('price', '500-1000')} />
                            500 - 1000
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('price', '1000-1500')} />
                            1000 - 1500
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('price', '1500-')} />
                            1500 and more
                        </label>
                    </div>
                </div>

                <div className="filter-section">
                    <h3>Age</h3>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '1')} />
                            0 - 1 year
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '2')} />
                             1 - 2 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '3')} />
                            2 - 3 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '4')} />
                            3 - 4 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '5')} />
                            4 - 5 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '6')} />
                            5 - 6 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '7')} />
                            6 - 7 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '8')} />
                            7 - 8 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '9')} />
                            8 - 9 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '10')} />
                            9 - 10 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '11')} />
                            10 - 11 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '12')} />
                            11 - 12 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '13')} />
                            12 - 13 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '14')} />
                            13 - 14 years
                        </label>
                    </div>
                    <div>
                         <label className="checkbox-label" >
                            <input type="checkbox" onChange={() => handleCheckboxChange('age', '15')} />
                            14 - 15 years
                        </label>
                    </div>
                </div>
            </div>

            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="product-item">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <div className="price">
                                <span className="discounted-price">Rs {calculateDiscountedPrice(product.price, product.discount)}</span>
                                <span className="original-price">Rs {product.price}</span>
                                <span className="discount-percentage">({product.discount}% off)</span>
                            </div>
                            <p>Age: {product.age} years</p>
                            <button1 onClick={() => handleAddToCart(product)}>Add to Cart</button1>
                            <button2 onClick={() => handleShortlist(product)}>Shortlist</button2>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default ProductPage;
