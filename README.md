# Shopify-Themes
It is important to note that shopify themes follow the same structure in terms of directories. This conventional tree structure is as follows:

```
[project-name]
│ 
└─── assets
│       application.js
│       application.scss.liquid
│   
└─── config
|       settings_data.json
|       settings_schema.json
|   
└─── layout
|       theme.liquid
|
└─── locales
|       en.default.json
|
└─── templates
|   |
|   └─── customers
|           account.liquid
|           activate_account.liquid
|           addresses.liquid
|           login.liquid
|           order.liquid
|           register.liquid
|           reset_password.liquid
|   
|        404.liquid
|        article.liquid
|        blog.liquid
|        cart.liquid
|        collection.liquid
|        collection.list.liquid
|        gift_card.liquid
|        index.liquid
|        list-collections.liquid
|        page.contact.liquid
|        page.liquid
|        product.liquid
|        search.liquid
| config.yml

```

Brief Decription:

* **Assets/**: as we can infer, here we will store any static assets for the site, such as: images that aren't changing, stylesheets, plugin files...
* **Config/**: holds the schema for our settings, which can be edited from the 'Customize' section of the shop; and also the default data.
* **Layout/**: contains the theme.liquid file which is the file for the general layout of the whole shop. The theme.liquid file is like the wrapper for everything that is going to be displayed on the site. It is worthy of note that we can also have different layouts.
* **Locales/**: this directory holds the general translations file. Can be used for translations, like building a shop that needs to be in different languages, here is where we will do our modifications. We can also have many locale files.
* **Templates/**: contains all the templates that the store NEEDS to have.
