# Review-Services

## Models:

## - Product Model

The **`Product`** model represents a product in the system. 
It is defined in **`Models/Product.ts`** using **TypeORM** decorators to be used as an entity in database.

### Fields:

- **`id`**: primary key for each product which is auto-generated number.
- **`name`**: name of the product (string).
- **`description`**: description of the product (string).
- **`price`**: price of the product (decimal).
- **`averageRating`**: This is average rating for the product calculated based on reviews (float)
