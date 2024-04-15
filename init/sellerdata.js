const Seller = require("../models/seller.js");

let sampleSellers = [
    new Seller({
        title: "Green Vegetables",
        name: "Spinachs",
        image:"",
        quantity: 60,
        description: "Fresh spinach leaves rich in iron and nutrients",
        price: 30,
        location: "New York",
        country: "USA"
    }),
    new Seller({
        title: "Farm Fresh Produce",
        name: "Tomatoes",
        image:"",
        quantity: 30,
        description: "Plump and juicy tomatoes grown organically on the farm",
        price: 20,
        location: "London",
        country: "UK"
    }),
    new Seller({
        title: "Organic Greens",
        name: "Kale",
        image:"",
        quantity: 20,
        description: "Nutrient-packed kale leaves perfect for salads and smoothies",
        price: 35,
        location: "Paris",
        country: "France"
    }),
    new Seller({
        title: "Root Vegetables",
        name: "Carrots",
        image:"",
        quantity: 40,
        description: "Sweet and crunchy carrots harvested from the garden",
        price: 15,
        location: "Berlin",
        country: "Germany"
    }),
    new Seller({
        title: "Fresh Herbs",
        name: "Basil",
        image:"",
        quantity: 15,
        description: "Aromatic basil leaves ideal for seasoning and garnishing",
        price: 25,
        location: "Tokyo",
        country: "Japan"
    }),
    new Seller({
        title: "Leafy Greens",
        name: "Lettuce",
        image:"",
        quantity: 25,
        description: "Crisp and refreshing lettuce leaves for salads and wraps",
        price: 40,
        location: "Sydney",
        country: "Australia"
    }),
    new Seller({
        title: "Cruciferous Vegetables",
        name: "Broccoli",
        image:"",
        quantity: 35,
        description: "Nutrient-rich broccoli florets packed with vitamins",
        price: 30,
        location: "Toronto",
        country: "Canada"
    }),
    new Seller({
        title: "Allium Vegetables",
        name: "Garlic",
        image:"",
        quantity: 20,
        description: "Flavorful garlic bulbs known for their culinary and medicinal properties",
        price: 20,
        location: "Moscow",
        country: "Russia"
    }),
    new Seller({
        title: "Fresh Peppers",
        name: "Bell Peppers",
        image:"",
        quantity: 30,
        description: "Colorful bell peppers with a sweet and tangy flavor",
        price: 45,
        location: "Rome",
        country: "Italy"
    }),
    new Seller({
        title: "Root Vegetables",
        name: "Potatoes",
        image:"",
        quantity: 10,
        description: "Versatile potatoes suitable for a variety of dishes",
        price: 18,
        location: "Madrid",
        country: "Spain"
    })
];
 module.exports={data:sampleSellers};