const Seller = require("../models/seller.js");

let sampleSellers = [
    new Seller({
        title: "Green Vegetables",
        name: "Spinachs",
        quantity: 60,
        description: "Fresh spinach leaves rich in iron and nutrients",
        price: 30,
        location: "New York",
        country: "USA",
        imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D"

    }),
    new Seller({
        title: "Farm Fresh Produce",
        name: "Tomatoes",
        quantity: 30,
        description: "Plump and juicy tomatoes grown organically on the farm",
        price: 20,
        location: "London",
        country: "UK",
        imageUrl: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D"

    }),
    new Seller({
        title: "Organic Greens",
        name: "Kale",
        quantity: 20,
        description: "Nutrient-packed kale leaves perfect for salads and smoothies",
        price: 35,
        location: "Paris",
        country: "France",
        imageUrl: "https://plus.unsplash.com/premium_photo-1675365979619-27e23094b87e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEthbGV8ZW58MHx8MHx8fDA%3D"

    }),
    new Seller({
        title: "Root Vegetables",
        name: "Carrots",
        quantity: 40,
        description: "Sweet and crunchy carrots harvested from the garden",
        price: 15,
        location: "Berlin",
        country: "Germany",
        imageUrl: "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fycm90fGVufDB8fDB8fHww"

    }),
    new Seller({
        title: "Fresh Herbs",
        name: "Basil",
        quantity: 15,
        description: "Aromatic basil leaves ideal for seasoning and garnishing",
        price: 25,
        location: "Tokyo",
        country: "Japan",
        imageUrl: "https://images.unsplash.com/photo-1629157247277-48f870757026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFzaWx8ZW58MHx8MHx8fDA%3D"

    }),
    new Seller({
        title: "Leafy Greens",
        name: "Lettuce",
        quantity: 25,
        description: "Crisp and refreshing lettuce leaves for salads and wraps",
        price: 40,
        location: "Sydney",
        country: "Australia",
        imageUrl: "https://images.unsplash.com/photo-1629318682484-e77bbbdf8283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxldHR1Y2UlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D"

    }),
    new Seller({
        title: "Cruciferous Vegetables",
        name: "Broccoli",
        quantity: 35,
        description: "Nutrient-rich broccoli florets packed with vitamins",
        price: 30,
        location: "Toronto",
        country: "Canada",       
         imageUrl: "https://images.unsplash.com/photo-1587351177732-5b0739d1bd44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb2Njb2xpfGVufDB8fDB8fHww"

    }),
    new Seller({
        title: "Allium Vegetables",
        name: "Garlic",
        quantity: 20,
        description: "Flavorful garlic bulbs known for their culinary and medicinal properties",
        price: 20,
        location: "Moscow",
        country: "Russia",
        imageUrl: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FybGljfGVufDB8fDB8fHww"

    }),
    new Seller({
        title: "Fresh Peppers",
        name: "Bell Peppers",
        quantity: 30,
        description: "Colorful bell peppers with a sweet and tangy flavor",
        price: 45,
        location: "Rome",
        country: "Italy",
        imageUrl: "https://images.unsplash.com/photo-1585159079680-8dec029b76ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlbGwlMjBwZXBwZXJzfGVufDB8fDB8fHww"

    }),
    new Seller({
        title: "Root Vegetables",
        name: "Potatoes",
        quantity: 10,
        description: "Versatile potatoes suitable for a variety of dishes",
        price: 18,
        location: "Madrid",
        country: "Spain",
        imageUrl: "https://images.unsplash.com/photo-1508313880080-c4bef0730395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG90YXRvZXN8ZW58MHx8MHx8fDA%3D"

    })
];
 module.exports={data:sampleSellers};