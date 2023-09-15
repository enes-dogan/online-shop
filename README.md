# Basic E-Commerce Website with Node.js, Express, MongoDB, EJS and Stripe

## Installation

```bash
# running mongodb instance on port 27017 (default) is required.
npm install
npm start
```
## Usage

After installation, you have to create a new user and then insert a `isAdmin: true` field in the database to be able to add products to the store.
```bash
db.users.updateOne( { _id: ObjectId("THE ID OF CREATED USER") }, { $set: { isAdmin: true } });
```
Then you can add products to the store. After adding products project works as intented.

>You can find example product images and description in the `./products` folder.
