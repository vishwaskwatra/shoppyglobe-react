# ShoppyGlobe

ShoppyGlobe is a simple e-commerce web application built with React, Redux, and Tailwind CSS. It allows users to browse products, view product details, and manage a shopping cart. The project utilizes an external API to fetch product data and demonstrates how to implement lazy loading and other React features.

## Features

- **Product Listing:** Browse a list of products fetched from an external API.
- **Product Search:** Search for products using the search bar in the header.
- **Product Details:** View details of a selected product.
- **Add to Cart:** Add products to the cart and manage quantities.
- **Cart Item Count:** The cart icon displays the number of items added to the cart.
- **404 Page:** Custom 404 page for non-existent routes.
- **Lazy Loading:** Product-related components are lazy-loaded for better performance.
- **Responsive Design:** Fully responsive UI designed with Tailwind CSS.

## Tech Stack

- **React** for building the UI.
- **Redux** for state management.
- **React Router** for navigation.
- **Tailwind CSS** for styling.
- **Fetch API** for making API calls to retrieve product data.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/vishwaskwatra/shoppyglobe-react
    ```
2. Navigate to the project directory:
    ```bash
   cd shoppyglobe-react
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```