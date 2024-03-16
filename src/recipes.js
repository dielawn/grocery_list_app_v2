import proteins from './ingredients/proteins.json';
import produce from './ingredients/produce.json';
import grain from './ingredients/grains.json';
import sauce from './ingredients/sauce.json';
import neccessities from './ingredients/necessities.json';
import costco from './ingredients/costco.json'
import bakingGoods from './ingredients/baking.json';
import cannedGoods from './ingredients/canned.json';
import driedGoods from './ingredients/dried.json';
import seasoning from './ingredients/seasoning.json';
import dairy from './ingredients/dairy.json';
import snack from './ingredients/snack.json';
import frozenFood from './ingredients/frozen.json';
import basics from './ingredients/basics.json'

const recipes = [
    { name: "Store Basics",
    ingredients: [
        ...basics,
        ...grain.filter(item => item.name === "Quick Oats" || item.name === "Everything Bagel"),
        ...cannedGoods.filter(item => item.name === "Peanut Butter"),
        ...dairy.filter(item => item.name === "Eggs" || item.name === "Cream Cheese" || item.name === "Yogurt"),
        ...bakingGoods.filter(item => item.name === "Brown Sugar" || item.name === "Vanilla Extract" 
        || item.name === "Chocolate Chips" || item.name === "Baking Soda" || item.name === "Salt" 
        || item.name === "Cinnamon"),
        ...produce.filter(item => item.name === "Spinach" || item.name === "Banana"), 
        ...driedGoods.filter(item => item.name === "Protein Powder"), 
        ...frozenFood.filter(item => item.name === "Berries"),
    ],
    image: './src/assets/general_store.jpg',
    instructions:'./src/instructions/',
    link: ''
    },
    
    {
        name: 'Costco',
        ingredients: [...costco ],
        image: './src/assets/costco-logo.png',
        instructions: './src/instructions/',
        link: ''
    },
    { name: 'Sweet Chili Pork Bowls', 
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Pork"),
        ...produce.filter(item => item.name === "Bell Pepper" || item.name === "Yellow Onion" || item.name === "Cilantro" || item.name === "Lime"),
        ...sauce.filter(item => item.name === "Sweet Soy Glaze" || item.name === "Sweet Thai Chili Sauce"), 
        ...driedGoods.filter(item => item.name === "Peanuts"),
        ...grain.filter(item => item.name === "Jasmine Rice")
        ], 
    image: './src/assets/sweet-chili-pork-bowls.avif',
    instructions:'./src/instructions/sweet-chili-pork-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/sweet-chili-pork-bowls-5efb358e43975d50ea6927d2'
    },
    { name: 'One-Pan Cajun Pork Sausage Skillet',
    ingredients: [
        ...proteins.filter(item => item.name === "Italian Pork Sausage"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Bell Pepper" 
        || item.name == "Roma Tomato" || item.name == "Parsley"),
        ...grain.filter(item => item.name === "Jasmine Rice"),
        ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
        ...cannedGoods.filter(item => item.name === "Tomato Paste"),
        ...driedGoods.filter(item => item.name === ""),
        ...seasoning.filter(item => item.name === "Cajun Spice Blend"),
        ...dairy.filter(item => item.name === "Monterey Jack Cheese" || item.name == "Sour Cream"),
        ],
    image: './src/assets/one-pan-cajun-pork-sausage-skillet.avif',
    instructions:'./src/instructions/one-pan-cajun-pork-sausage-skillet.pdf',
    link: 'https://www.hellofresh.com/recipes/one-pan-cajun-pork-sausage-skillet-61e6f0ac9853836f347a1f1d'
    },
    { name: 'Pork Sausage and Bell Pepper Risotto',
    ingredients: [
        ...proteins.filter(item => item.name === "Italian Pork Sausage"),
        ...produce.filter(item => item.name === "Bell Pepper" || item.name == "Garlic"
        || item.name == "Lemon" || item.name == "Scallions"),
        ...grain.filter(item => item.name === "Arborio Rice"),
        ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Italian Seasoning"),
        ...dairy.filter(item => item.name === "Parmesan Cheese"),
        ],
    image: './src/assets/pork-sausage-bell-pepper-risotto.avif',
    instructions:'./src/instructions/pork-sausage-bell-pepper-risotto.pdf',
    link: 'https://www.hellofresh.com/recipes/pork-sausage-bell-pepper-risotto-617041791f771a6a0b36e4b2'
    },
    { name: 'Sesame Soy Pork Bowls',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Pork"),
        ...produce.filter(item => item.name === "Shredded Carrots" || item.name === "Cilantro" || item.name === "Lime"),
        ...sauce.filter(item => item.name === "Sweet Soy Glaze" || item.name === "Sriracha" || item.name === 'Mayonnaise'), 
        ...driedGoods.filter(item => item.name === "Crispy Fried Onion"),
        ...grain.filter(item => item.name === "Jasmine Rice")
        ],
    image: './src/assets/sesame-soy-pork-bowl.avif',
    instructions:'./src/instructions/sesame-soy-pork-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/sesame-soy-pork-bowls-5fa06a5f20b9661c0d5e342f'
    },
    { name: 'Yucatan Citrus Chicken Bowl',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast Strips"),
        ...produce.filter(item => item.name === "Mandarin Orange" || item.name === "Lime"
        || item.name === "Red Onion" || item.name === "Poblano Pepper" || item.name === "Cilantro"),
        ...grain.filter(item => item.name === "Jasmine Rice"),
        ...sauce.filter(item => item.name === "Tex-Mex Paste"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend" || item.name === "Ancho Chili Powder"),
        ...dairy.filter(item => item.name === "Sour Cream"),
        ],
    image: './src/assets/yucatan-citrus-chicken-bowls.avif',
    instructions:'./src/instructions/yucatan-citrus-chicken-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/yucatan-citrus-chicken-bowls-621e8530b089c66fdb1a5599'
    },
    { name: 'Chimi Chicken & Yellow Rice Bowls',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast Strips"),
        ...produce.filter(item => item.name === "Poblano Pepper" || item.name === "Cilantro" || item.name === "Yellow Onion" 
        || item.name === "Roma Tomato" || item.name === "Lemon" || item.name === "Garlic" || item.name === "Chili Pepper"),
        ...sauce.filter(item => item.name === "Chicken Stock Concentrate"), 
        ...seasoning.filter(item => item.name === "Tumeric"|| item.name === "Cumin"),
        ...grain.filter(item => item.name === "Jasmine Rice")
        ],
    image: './src/assets/chimi-chicken-yellow-rice-bowls.avif',
    instructions:'./src/instructions/chimi-chicken-yellow-rice-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/chimi-chicken-yellow-rice-bowls-5e5e9a73e0678c51867e16db'
    },
    { name: 'Veggie Burrito Bowl',
    ingredients: [
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato" 
        || item.name === "Cilantro" || item.name === "Lime"),
        ...grain.filter(item => item.name === "Jasmine Rice"),
        ...sauce.filter(item => item.name === "Veggie Stock Concentrate" || item.name === "Hot Sauce"),
        ...cannedGoods.filter(item => item.name === "Black Beans" || item.name === "Corn"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Monterey Jack Cheese" || item.name === "Sour Cream"),
        ...snack.filter(item => item.name === "Tortilla Chips")
        ],
    image: './src/assets/veggie-burrito-bowl.avif',
    instructions:'./src/instructions/veggie-burrito-bowl.pdf',
    link: 'https://www.hellofresh.com/recipes/veggie-burrito-bowls-5e5ea67325ed1a2b107a3598'
    },
    { name: 'Thai Basil Beef Bowls',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...produce.filter(item => item.name === "Shallot" || item.name === "Bell Pepper"
        || item.name === "Ginger" || item.name === "Lime" || item.name === "Basil"),
        ...sauce.filter(item => item.name === "Mushroom Stock Concentrate"
        || item.name === "Ponzu Sauce" || item.name === "Mayonnaise" || item.name === "Sriracha"), 
        ...driedGoods.filter(item => item.name === "Peanuts"),
        ...grain.filter(item => item.name === "Jasmine Rice")
        ],
    image: './src/assets/thai-basil-beef-bowls.avif',
    instructions:'./src/instructions/thai-basil-beef-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/thai-basil-beef-bowls-5e39b0b7055a3835f148531a'
    },
    { name: 'Chicken Sausage & Rice Skillet',
    ingredients: [
        ...proteins.filter(item => item.name === "Italian Chicken Sausage"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato"
        || item.name === "Long Green Pepper" || item.name === "Lime"),
        ...grain.filter(item => item.name === "Jasmine Rice"),
        ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Chicken Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Pepper Jack Cheese"),    
        ],
    image: './src/assets/southwest-chicken-sausage-rice-skillet.avif',
    instructions:'./src/instructions/southwest-chicken-sausage-rice-skillet.pdf',
    link: 'https://www.hellofresh.com/recipes/southwest-chicken-sausage-rice-skillet-6076d3ba1b35831bb538d476'
    },
    { name: 'Pork & Zucchini Bibimbap',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Pork"),
        ...produce.filter(item => item.name === "Scallions" || item.name === "Carrots"
        || item.name === "Zucchini" || item.name === "Ginger" || item.name === "Garlic"),
        ...sauce.filter(item => item.name === "White Wine Vinegar" || item.name === "Sesame Oil"
        || item.name === "Soy Sauce" || item.name === "Gochujang Sauce"), 
        ...grain.filter(item => item.name === "Jasmine Rice")
        ],
    image: './src/assets/pork-and-veggie-bibimbap.avif',
    instructions:'./src/instructions/pork-and-veggie-bibimbap.pdf',
    link: 'https://www.hellofresh.com/recipes/pork-and-veggie-bibimbap-5e67d7511082fd2292725cfc'
    },
    { name: 'Teriyaki Pork Luau Bowls',
    ingredients:  [
        ...proteins.filter(item => item.name === "Ground Pork"),
        ...produce.filter(item => item.name === "Long Green Pepper" || item.name === "Red Onion"
        || item.name === "Roma Tomato" || item.name === "Lime" || item.name === "Garlic"),
        ...sauce.filter(item => item.name === "Teriyaki Sauce"), 
        ...grain.filter(item => item.name === "Jasmine Rice")
        ],
    image: './src/assets/teriyaki-pork-luau-bowls.avif',
    instructions:'./src/instructions/teriyaki-pork-luau-bowls.pdf',
    link: 'https://www.hellofresh.com/recipes/teriyaki-pork-luau-bowls-5fa56ef97511fc2549429dc0'
    },
    { name: 'Gouda Pork Burgers',
    ingredients:  [
        ...proteins.filter(item => item.name === "Ground Pork"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Lime"
        || item.name === "Garlic"),
        ...seasoning.filter(item => item.name === "Smoked Paprika"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sour Cream"), 
        ...dairy.filter(item => item.name === "Gouda Cheese"),
        ...grain.filter(item => item.name === "Potato Buns")
        ],
    image: './src/assets/gouda-pork-burgers.avif',
    instructions:'./src/instructions/gouda-pork-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
    },
    
    { name: 'Firehouse Cheeseburgers',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...sauce.filter(item => item.name === "Ranch Dressing" || item.name === "Sour Cream"
        || item.name === "Frank's Hot Sauce"),
        ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
        ...seasoning.filter(item => item.name === "Frank's Seasoning" || item.name === "Garlic Powder"),
        ...driedGoods.filter(item => item.name === "Crispy Fried Onion"),
        ...grain.filter(item => item.name === "Potato Buns")
        ],
    image: './src/assets/firehouse-cheeseburgers.avif',
    instructions:'./src/instructions/firehouse-cheeseburgers.pdf',
    link: 'https://www.hellofresh.com/recipes/firehouse-cheeseburgers-609bd8375e0e4108d54ad302'
    },
    { name: 'Melty Monterey Jack Burger',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Garlic"),
        ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
        ...sauce.filter(item => item.name === "Balsamic Vinegar" || item.name === "Ketchup"
        || item.name === "Mayonnaise"),
        ...grain.filter(item => item.name === "Potato Buns")
        ],
    image: './src/assets/melty-monterey-jack-burgers.avif',
    instructions:'./src/instructions/melty-monterey-jack-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5e25f552b9721f76446c7585'
    },
    { name: 'Ancho BBQ Sloppy Joes',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Dill Pickle"),
        ...bakingGoods.filter(item => item.name === "Cornstarch"),
        ...sauce.filter(item => item.name === "BBQ Sauce" || item.name === "Ketchup"
        || item.name === "Beef Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Ancho Chili Powder"),
        ...grain.filter(item => item.name === "Potato Buns")
        ],
    image: './src/assets/ancho-bbq-sloppy-joes.avif',
    instructions: './src/instructions/ancho-bbq-sloppy-joes.pdf',
    link: 'https://www.hellofresh.com/recipes/ancho-bbq-sloppy-joes-6231e882e5574621ea0c8d10'
    },
    
    { name: 'Bacon Buckaroo Burger',
    ingredients:  [
        ...proteins.filter(item => item.name === "Ground Beef" || item.name === 'Bacon'),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Scallions"
        || item.name === 'Dill Pickle'),
        ...dairy.filter(item => item.name === "Pepper Jack Cheese" || item.name === 'Gouda Cheese'
        || item.name === 'Sour Cream'),
        ...sauce.filter(item => item.name === "BBQ Sauce"),
        ...grain.filter(item => item.name === "Brioche Buns")
        ],
    image: './src/assets/bacon-buckaroo-burger.avif',
    instructions:'./src/instructions/bacon-buckaroo-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/bacon-buckaroo-burgers-60f82814e088b95c6b25fb6e'
    },
    { name: 'White Cheddar Wonder Burger',
    ingredients:  [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...produce.filter(item => item.name === "Yellow Onion"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Dijon Mustard"
        || item.name === "Ketchup"), 
        ...seasoning.filter(item => item.name === "Old Bay Seasoning"),
        ...dairy.filter(item => item.name === "White Cheddar Cheese"),
        ...grain.filter(item => item.name === "Potato Buns")
        ],
    image: './src/assets/white-cheddar-wonder-burger.avif',
    instructions:'./src/instructions/white-cheddar-wonderburgers.pdf',
    link: 'https://www.hellofresh.com/recipes/white-cheddar-wonderburgers-61cb23eb4547a11c25516b1e'
    },
    { name: 'BBQ Cheddar Burger',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Yukon Gold Potato"),
        ...grain.filter(item => item.name === "Potato Buns"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "BBQ Sauce"),
        ...seasoning.filter(item => item.name === "Chipotle Powder" || item.name === "Fry Seasoning"),
        ...dairy.filter(item => item.name === "Cheddar Cheese"),
        ],
    image: './src/assets/bbq-cheddar-burgers.avif',
    instructions:'bbq-cheddar-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/bbq-cheddar-burgers-61f18805e6fc5466ef777d06'
    },
    { name: 'Crispy Cajun Chicken Sandwiches',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Cutlets"),
        ...grain.filter(item => item.name === "Brioche Buns"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Hot Sauce"),
        ...cannedGoods.filter(item => item.name === "Dill Pickle"),
        ...seasoning.filter(item => item.name === "Cajun Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream"),
        ...bakingGoods.filter(item => item.name === "Flour" || item.name === "Cornstarch"),
        ],
    image: './src/assets/crispy-cajun-chicken-sandwiches.avif',
    instructions:'./src/instructions/crispy-cajun-chicken-sandwiches.pdf',
    link: 'https://www.hellofresh.com/recipes/crispy-cajun-chicken-sandwiches-611d61d0ba10940c4d444561'
    },
    { name: 'BBQ Pineapple Flatbread',
    ingredients: [
        ...produce.filter(item => item.name === "Shallot" || item.name === "Cilantro"
        || item.name === "Poblano Pepper"),
        ...grain.filter(item => item.name === "Flatbreads"),
        ...sauce.filter(item => item.name === "BBQ Sauce" || item.name === "Red Wine Vinegar"),
        ...cannedGoods.filter(item => item.name === "Pineapple"),
        ...dairy.filter(item => item.name === "Mozzearella Cheese" || item.name === " Monterey Jack Cheese"),
        ],
    image: './src/assets/bbq-pineapple-flatbread.avif',
    instructions:'./src/instructions/bbq-pineapple-flatbreads.pdf',
    link: 'https://www.hellofresh.com/recipes/bbq-pineapple-flatbreads-620c20eaaf420111a021e19a'
    },
    { name: 'Zucchini & Tomato Flatbreads',
    ingredients: [
        ...produce.filter(item => item.name === "Zucchini" || item.name === "Garlic"
        || item.name === "Basil" || item.name === "Grape Tomatoes" || item.name === "Lemon"),
        ...grain.filter(item => item.name === "Flatbreads"),
        ...seasoning.filter(item => item.name === "Chili Flakes"),
        ...dairy.filter(item => item.name === "Ricotta Cheese"),
        ...bakingGoods.filter(item => item.name === "Honey"),
        ],
    image: './src/assets/zucchini-and-tomato-flatbreads.avif',
    instructions:'./src/instructions/zucchini-and-tomato-flatbreads.pdf',
    link: 'https://www.hellofresh.com/recipes/zucchini-and-tomato-flatbreads-5e67d93735c3537f181f43c8'
    },
    { name: 'Bacon Jalapeno Mac & Cheese',
    ingredients: [
        ...proteins.filter(item => item.name === "Bacon"),
        ...grain.filter(item => item.name === "Cavatappi Pasta"),
        ...produce.filter(item => item.name === "Jalapeno" || item.name === "Scallions"
        || item.name === "Garlic"),
        ...driedGoods.filter(item => item.name === "Bread Crumbs"),
        ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Cream Sauce Base" 
        || item.name === "Mexican Cheese Blend" || item.name === "Monterey Jack Cheese"),
        ...bakingGoods.filter(item => item.name === "Flour"),
        ],
    image: './src/assets/bacon-jalapeno-mac-cheese.avif',
    instructions:'./src/instructions/bacon-jalapeno-mac-cheese.pdf',
    link: 'https://www.hellofresh.com/recipes/bacon-jalapeno-mac-cheese-615db9700ab39518157b909f'
    },
    { name: 'Epic Nacho Mac & Cheese',
    ingredients: [
        ...grain.filter(item => item.name === "Cavatappi Pasta"),
        ...produce.filter(item => item.name === "Long Green Pepper" || item.name === "Scallions" 
        || item.name === "Garlic"),
        ...snack.filter(item => item.name === "Tortilla Chips"),
        ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "White Cheddar Cheese" 
        || item.name === "Mexican Cheese Blend" || item.name === "Sour Cream"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...sauce.filter(item => item.name === "Hot Sauce"),
        ...bakingGoods.filter(item => item.name === "Flour"),
        ],
    image: './src/assets/epic-nacho-mac-cheese.avif',
    instructions:'./src/instructions/epic-nacho-mac-cheese.pdf',
    link: 'https://www.hellofresh.com/recipes/epic-nacho-mac-n-cheese-6171950af588a0150a5570f4'
    },
    { name: 'Sheet Pan Monterey Jack Chicken',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Cutlets"),
        ...produce.filter(item => item.name === "Carrots" || item.name === "Yukon Gold Potato"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sriracha"),
        ...driedGoods.filter(item => item.name === "Bread Crumbs"),
        ...seasoning.filter(item => item.name === "Ranch Spice"),
        ...dairy.filter(item => item.name === "Monterey Jack Cheese"),
        ],
    image: './src/assets/monterey-jack-un-fried-chicken.avif',
    instructions:'./src/instructions/monterey-jack-un-fried-chicken.pdf',
    link: 'https://www.hellofresh.com/recipes/monterey-jack-un-fried-chicken-61f9829bc37180194a54cb5b'
    },
    { name: 'Bulgogi Pork Tenderloin',
    ingredients: [
        ...proteins.filter(item => item.name === "Pork Tenderloin"),
        ...produce.filter(item => item.name === "Carrots" || item.name == "Lemon"
        || item.name === "Scallions"),
        ...grain.filter(item => item.name === "Jasmine Rice"),
        ...sauce.filter(item => item.name === "Bulgogi Sauce"),
        ...cannedGoods.filter(item => item.name === ""),
        ...driedGoods.filter(item => item.name === "Sesame Seeds"),
        ],
    image: './src/assets/bulgogi-pork-tenderloin.avif',
    instructions:'./src/instructions/bulgogi-pork-tenderloin.pdf',
    link: 'https://www.hellofresh.com/recipes/bulgogi-pork-tenderloin-61d4c2208a7a0c7c44733a7d'
    },
    { name: 'Honey Thyme Pork Tenderloin',
    ingredients: [
        ...proteins.filter(item => item.name === "Pork Tenderloin"),
        ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Garlic" 
        || item.name === "Broccoli"),
        ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Dried Thyme"),
        ...bakingGoods.filter(item => item.name === "Honey"),
        ],
    image: './src/assets/honey-thyme-pork-tenderloin.avif',
    instructions:'./src/instructions/honey-thyme-pork-tenderloin.pdf',
    link: 'https://www.hellofresh.com/recipes/honey-thyme-pork-tenderloin-615db8f220008b2e0307f097'
    },
    { name: 'Peachy Keen BBQ-Rubbed Pork Chops',
    ingredients:  [
        ...proteins.filter(item => item.name === "Pork Chops"),
        ...produce.filter(item => item.name === "Green Beans" || item.name === "Lemon" 
        || item.name === "Garlic"),
        ...grain.filter(item => item.name === "Jasmine Rice"),
        ...sauce.filter(item => item.name === "Chicken Stock Concentrate" || item.name === "Peach Jam"),
        ...seasoning.filter(item => item.name === "Sweet and Smoky BBQ Seasoning"),
        ],
    image: './src/assets/peachy-keen-bbq-rubbed-pork-chops.avif',
    instructions:'./src/instructions/peachy-keen-bbq-rubbed-pork-chops.pdf',
    link: 'https://www.hellofresh.com/recipes/peachy-keen-bbq-rubbed-pork-chops-61795d17951b0e24e516bead'
    },
    { name: 'Steakhouse-Style Pork Chops',
    ingredients: [
        ...proteins.filter(item => item.name === "Pork Chops"),
        ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Yellow Onion"
        || item.name === "Lemon" || item.name === "Broccoli"),
        ...sauce.filter(item => item.name === "Beef Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Bold and Savory Steak Spice"),
        ...dairy.filter(item => item.name === "Sour Cream"),
        ],
    image: './src/assets/steakhouse-pork-chops.avif',
    instructions:'./src/instructions/steakhouse-pork-chops.pdf',
    link: 'https://www.hellofresh.com/recipes/steakhouse-pork-chops-5ff4c5c85811d66eb9512c50'
    },
    { name: 'Balsamic and Fig Beef Tenderloin',
    ingredients:  [
        ...proteins.filter(item => item.name === "Beef Tenderloin Steak"),
        ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Brussels Sprouts"
        || item.name === "Shallot" || item.name === "Rosemary" || item.name === "Garlic"),
        ...sauce.filter(item => item.name === "Beef Stock Concentrate" || item.name === "Fig Jam"
        || item.name === "Balsamic Vinegar"),
        ...driedGoods.filter(item => item.name === "Bread Crumbs"),
        ...dairy.filter(item => item.name === "Sour Cream"),
        ],
    image: './src/assets/balsamic-fig-beef-tenderloin.avif',
    instructions:'./src/instructions/balsamic-fig-beef-tenderloin.pdf',
    link: 'https://www.hellofresh.com/recipes/balsamic-fig-beef-tenderloin-5f3aeb9bad6a05609c7d8cac'
    },
    { name: 'Al Pastor Pulled Pork Tacos',
    ingredients: [
        ...proteins.filter(item => item.name === "Pulled Pork"),
        ...produce.filter(item => item.name === "Red Onion" || item.name === "Lime"
        || item.name === "Cilantro"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...sauce.filter(item => item.name === "Tex-Mex Paste"),
        ...cannedGoods.filter(item => item.name === "Pineapple"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ],
    image: './src/assets/al-pastor-pulled-pork-tacos.avif',
    instructions:'./src/instructions/al-pastor-pulled-pork-tacos.pdf',
    link: 'https://www.hellofresh.com/recipes/al-pastor-pulled-pork-tacos-6239d8fa96d43a56f83be59f'
    },
    { name: 'Cheesy Beef Tostadas',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato"
        || item.name === "Lime" || item.name === "Long Green Pepper" || item.name === "Cilantro"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Beef Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Chili Powder" || item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend"),
        ],
    image: './src/assets/cheesy-beef-tostadas.avif',
    instructions:'./src/instructions/cheesy-beef-tostadas.pdf',
    link: 'https://www.hellofresh.com/recipes/cheesy-beef-tostadas-5e94c0640d7f123476528c9e'
    },
    
    { name: 'Rio Rancho Pulled Pork Tacos',
    ingredients: [
        ...proteins.filter(item => item.name === "Pulled Pork"),
        ...produce.filter(item => item.name === "Coleslaw Mix" || item.name === "Yellow Onion"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Chicken Stock Concentrate"
        || item.name === "White Wine Vinegar"),
        ...cannedGoods.filter(item => item.name === "Tomato Paste"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream"),
        ],
    image: './src/assets/rio-rancho-pulled-pork-tacos.avif',
    instructions:'./src/instructions/rio-rancho-pulled-pork-tacos.pdf',
    link: 'https://www.hellofresh.com/recipes/rio-rancho-pulled-pork-tacos-5e5ce98d740b5917bc02d716'
    },
    { name: 'Chicken Cheddar Fajitas',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast"),
        ...produce.filter(item => item.name === "Bell Pepper" || item.name === "Jalapeno"
        || item.name === "Red Onion" || item.name === "Lime"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Cheddar Cheese"),
        ],
    image: './src/assets/chicken-cheddar-fajitas.avif',
    instructions:'./src/instructions/chicken-cheddar-fajitas.pdf',
    link: 'https://www.hellofresh.com/recipes/chicken-cheddar-fajitas-5de6cecef4d7307d823bb545'
    },
    { name: 'Black Bean & Pepper Quesadillas',
    ingredients: [
        ...produce.filter(item => item.name === "Guacamole" || item.name === "Long Green Pepper"
        || item.name === "Scallions" || item.name === "Roma Tomato" || item.name === "Lime"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...cannedGoods.filter(item => item.name === "Black Beans"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend" 
        || item.name === "Monterey Jack Cheese"),
        ],
    image: './src/assets/black-bean-quesadillas.avif',
    instructions:'./src/instructions/black-bean-quesadillas.pdf',
    link: 'https://www.hellofresh.com/recipes/black-bean-quesadillas-5e94c48ee884b05a1c0e32c2'
    },
    { name: 'One-Pan Pork Fajita Lettuce Wrap',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Pork"),
        ...produce.filter(item => item.name === "Romaine Lettuce" || item.name === "Yellow Onion" 
        || item.name === "Long Green Pepper" || item.name === "Lime"),
        ...sauce.filter(item => item.name === "Beef Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Fajita Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend"),
        ...snack.filter(item => item.name === "Tortilla Chips")
        ],
    image: './src/assets/one-pan-pork-fajita-lettuce-cups.avif',
    instructions:'./src/instructions/one-pan-pork-fajita-lettuce-cups.pdf',
    link: 'https://www.hellofresh.com/recipes/one-pan-pork-fajita-lettuce-cups-6231f20c57fc3010631bb574'
    },
    { name: 'Chicken Enchiladas Verdes',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast Strips"),
        ...produce.filter(item => item.name === "Poblano Pepper" || item.name === "Scallions"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...sauce.filter(item => item.name === "Hot Sauce" || item.name === "Green Salsa"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Mexican Cheese Blend"),
        ],
    image: './src/assets/salsa-verde-chicken-enchiladas.avif',
    instructions:'./src/instructions/salsa-verde-chicken-enchiladas.pdf',
    link: 'https://www.hellofresh.com/recipes/salsa-verde-chicken-enchiladas-5dfd0bae39b70a23332c4678'
    },
    { name: 'Steak and Green Pepper Quesadillas',
    ingredients: [
        ...proteins.filter(item => item.name === "Diced Steak"),
        ...produce.filter(item => item.name === "Long Green Pepper"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...sauce.filter(item => item.name === "Hot Sauce"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Pepper Jack Cheese" || item.name === "Mexican Cheese Blend"
        || item.name === "Sour Cream"),
        ],
    image: './src/assets/steak-green-pepper-quesadillas.avif',
    instructions:'./src/instructions/steak-green-pepper-quesadillas.pdf',
    link: 'https://www.hellofresh.com/recipes/steak-green-pepper-quesadillas-5ea8310a56a9d32f9d717bc9'
    },
    { name: 'Chicken Pineapple Qesadillas',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast Strips"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Roma Tomato"
        || item.name === "Lime" || item.name === "Cilantro"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...cannedGoods.filter(item => item.name === "Pineapple"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Mozzarella Cheese" || item.name === "Sour Cream"),
        ],
    image: './src/assets/chicken-pineapple-quesadillas.avif',
    instructions:'./src/instructions/chicken-pineapple-quesadillas.pdf',
    link: 'https://www.hellofresh.com/recipes/chicken-pineapple-quesadillas-5e5026694cd03e416b3ebf93'
    },
    { name: 'Mighty Mushroom Tortilla Melts',
    ingredients: [
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Lemon"
        || item.name === "Apple" || item.name === "Mixed Greens" || item.name === "Button Mushrooms"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...sauce.filter(item => item.name === "Mushroom Stock Concentrate"),
        ...seasoning.filter(item => item.name === "Fry Seasoning"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Monterey Jack Cheese"
        || item.name === "Cheddar Cheese"),    
        ],
    image: './src/assets/mighty-mushroom-tortilla-melts.avif',
    instructions:'./src/instructions/mighty-mushroom-tortilla-melts.pdf',
    link: 'https://www.hellofresh.com/recipes/mighty-mushroom-tortilla-melts-6239d54bf2907366e348025e'
    },
    { name: 'Pork & Poblano Tacos',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Pork"),
        ...produce.filter(item => item.name === "Red Onion" || item.name === "Roma Tomato"
        || item.name === "Cilantro" || item.name === "Poblano Pepper" || item.name === "Kiwi"
        || item.name === "Lime"),
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
        ...cannedGoods.filter(item => item.name === "Tomato Paste"),
        ...seasoning.filter(item => item.name === "Mexican Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream"),
        ],
    image: './src/assets/pork-and-poblano-tacos.avif',
    instructions:'./src/instructions/pork-and-poblano-tacos.pdf',
    link: 'https://www.hellofresh.com/recipes/pork-and-poblano-tacos-5d35c6b276961900177709c0'
    },
    { name: 'Sweet Potato Fajitas',
    ingredients: [
        ...produce.filter(item => item.name === "Sweet Potato" || item.name === "Red Onion"
        || item.name === "Roma Tomato" || item.name === "Cilantro" || item.name === "Long Green Pepper"
        || item.name === "Lime" || item.name === "Jalapeno"), 
        ...grain.filter(item => item.name === "Flour Tortillas"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Pepper Jack Cheese"),
        ],
    image: './src/assets/sweet-potato-fajitas.avif',
    instructions:'./src/instructions/sweet-potato-fajitas.pdf',
    link: 'https://www.hellofresh.com/recipes/2018w50-r8-sweet-potato-fajitas-5c87e384c445fa032d20dc82'
    },
    
    { name: 'Harissa Sweet Potato pockets',
    ingredients: [
        ...produce.filter(item => item.name === "Sweet Potato" || item.name === "Garlic"
        || item.name === "Dill" || item.name === "Cucumber" || item.name === "Avacado"),
        ...grain.filter(item => item.name === "Pita Bread"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "White Wine Vinegar"),
        ...driedGoods.filter(item => item.name === "Pepitas"),
        ...seasoning.filter(item => item.name === "Harissa Powder"),
        ],
    image: './src/assets/harissa-sweet-potato-pita-pockets.avif',
    instructions:'./src/instructions/harissa-sweet-potato-pita-pockets.pdf',
    link: 'https://www.hellofresh.com/recipes/harissa-sweet-potato-pita-pockets-5f15dcd008c01b2af5444822'
    },
    { name: 'Melty Double Red Pepper Panini',
    ingredients: [
        ...proteins.filter(item => item.name === ""),
        ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Zucchini" 
        || item.name === "Red Onion" || item.name === "Bell Pepper"),
        ...grain.filter(item => item.name === "Sourdough Bread"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Roasted Red Pepper Spread"),
        ...driedGoods.filter(item => item.name === ""),
        ...seasoning.filter(item => item.name === "Italian Seasoning" || item.name === "Garlic Powder"),
        ...dairy.filter(item => item.name === "Mozzarella Cheese"),    
        ],
    image: './src/assets/double-red-pepper-panini.avif',
    instructions:'./src/instructions/double-red-pepper-panini.pdf',
    link: 'https://www.hellofresh.com/recipes/double-red-pepper-panini-6239d8a288ef2226660b2f87'
    },
    { name: "Mushroom & Herb Shepherd's Pie",
    ingredients: [
        ...produce.filter(item => item.name === "Yukon Gold Potato" || item.name === "Button Mushrooms"
        || item.name === "Yellow Onion" || item.name === "Carrots" || item.name === "Thyme"),
        ...sauce.filter(item => item.name === "Mushroom Stock Concentrate"),
        ...cannedGoods.filter(item => item.name === "Tomato Paste"),
        ...seasoning.filter(item => item.name === "Garlic Powder"),
        ...dairy.filter(item => item.name === "White Cheddar Cheese" || item.name === "Sour Cream"),
        ...bakingGoods.filter(item => item.name === "Flour"),
        ],
    image: './src/assets/mushroom-herb-shepherd-s-pie.avif',
    instructions:'./src/instructions/mushroom-herb-shepherd-s-pie.pdf',
    link: 'https://www.hellofresh.com/recipes/mushroom-herb-shepherd-s-pie-614b46bfcbfa3317d5247f22'
    },
    { name: 'One-Pot Beef & Black Bean Chili',
    ingredients: [
        ...proteins.filter(item => item.name === "Ground Beef"),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Jalapeno"),
        ...sauce.filter(item => item.name === "Beef Stock Concentrate" || item.name === "Hot Sauce"),
        ...cannedGoods.filter(item => item.name === "Black Beans" || item.name === "Diced Tomatoes"
        || item.name === "Tomato Paste"),
        ...seasoning.filter(item => item.name === "Southwest Spice Blend" || item.name === "Mexican Spice Blend"),
        ...dairy.filter(item => item.name === "Sour Cream" || item.name === "Monterey Jack Cheese"),
        ],
    image: './src/assets/one-pot-beef-black-bean-chili.avif',
    instructions:'./src/instructions/one-pot-beef-black-bean-chili.pdf',
    link: 'https://www.hellofresh.com/recipes/one-pot-beef-black-bean-chili-5d76b40292f8cd000f15374a'
    },
    { name: 'Chicken Garlic Parmesan Spaghetti',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast"),
        ...produce.filter(item => item.name === "Roma Tomato" || item.name === "Garlic"),
        ...grain.filter(item => item.name === "Spaghetti"),
        ...seasoning.filter(item => item.name === "Tuscan Heat Spice"),
        ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Parmesan Cheese"),
        ],
    image: './src/assets/chicken-over-garlic-parmesan-spaghetti.avif',
    instructions:'./src/instructions/chicken-over-garlic-parmesan-spaghetti.pdf',
    link: 'https://www.hellofresh.com/recipes/chicken-over-garlic-parmesan-spaghetti-60dc72a95854557dcb6bd5aa'
    },
    { name: 'Parmesan-Crusted Chicken',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast"),
        ...produce.filter(item => item.name === "Roma Tomato" || item.name === "Garlic"
        || item.name === "Lemon"),
        ...grain.filter(item => item.name === "Spaghetti"),
        ...sauce.filter(item => item.name === "Dijon Mustard"),
        ...driedGoods.filter(item => item.name === "Bread Crumbs"),
        ...seasoning.filter(item => item.name === "Fry Seasoning"),
        ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Parmesan Cheese"
        || item.name === "Sour Cream"),
        ],
    image: './src/assets/parmesan-crusted-chicken.avif',
    instructions:'./src/instructions/parmesan-crusted-chicken.pdf',
    link: 'https://www.hellofresh.com/recipes/parmesan-crusted-chicken-5eb9ae9de88fa8571c5fbc7c'
    },
    { name: 'Balsamic Tomato & Herb Chicken',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Cutlets"),
        ...produce.filter(item => item.name === "Roma Tomato" || item.name === "Green Herb Blend" 
        || item.name === "Garlic"),
        ...grain.filter(item => item.name === "Spaghetti"),
        ...sauce.filter(item => item.name === "Balsamic Vinegar"),
        ...seasoning.filter(item => item.name === "Italian Seasoning"),
        ...dairy.filter(item => item.name === "Mozzarella Cheese"),
        ],
    image: './src/assets/balsamic-tomato-herb-chicken.avif',
    instructions:'./src/instructions/balsamic-tomato-herb-chicken.pdf',
    link: 'https://www.hellofresh.com/recipes/balsamic-tomato-herb-chicken-61b8a9de22509a6288133045'
    },
    { name: 'Creamy Parmesan Chicken Spaghetti',
    ingredients: [
        ...proteins.filter(item => item.name === "Chicken Breast Strips"),
        ...produce.filter(item => item.name === "Lemon" || item.name === "Roma Tomato" 
        || item.name === "Green Herb Blend"),
        ...grain.filter(item => item.name === "Spaghetti"),
        ...seasoning.filter(item => item.name === "Tuscan Heat Spice"),
        ...dairy.filter(item => item.name === "Garlic Herb Butter" || item.name === "Cream Cheese" 
        || item.name === "Parmesan Cheese"),
        ],
    image: './src/assets/creamy-parmesan-chicken-spaghetti.avif',
    instructions:'./src/instructions/creamy-parmesan-chicken-spaghetti.pdf',
    link: 'https://www.hellofresh.com/recipes/creamy-parmesan-chicken-spaghetti-5e430636195e8804526bc4e4'
    },
    { name: 'Chicken Parm Over Spaghetti',
    ingredients:  [
        ...proteins.filter(item => item.name === "Chicken Cutlets"),
        ...produce.filter(item => item.name === "Garlic"),
        ...grain.filter(item => item.name === "Spaghetti"),
        ...cannedGoods.filter(item => item.name === "Marinara Sauce"),
        ...driedGoods.filter(item => item.name === "Bread Crumbs"),
        ...seasoning.filter(item => item.name === "Italian Seasoning"),
        ...dairy.filter(item => item.name === "Parmesan Cheese" || item.name === "Sour Cream"
        || item.name === "Mozzarella Cheese"),
        ],
    image: './src/assets/chicken-parm-over-spaghetti.avif',
    instructions:'./src/instructions/chicken-parm-over-spaghetti.pdf',
    link: 'https://www.hellofresh.com/recipes/chicken-parm-over-spaghetti-6076d40764e0061aa9040d7c'
    },
    { name: 'Sun-Dried Tomato Spaghetti',
    ingredients: [
        ...produce.filter(item => item.name === "Garlic" || item.name === "Grape Tomatoes"
        || item.name === "Green Herb Blend"),
        ...grain.filter(item => item.name === "Spaghetti"),
        ...sauce.filter(item => item.name === "Veggie Stock Concentrate"),
        ...driedGoods.filter(item => item.name === "Sliced Almonds" || item.name === "Sun-Dried Tomatoes"),
        ...dairy.filter(item => item.name === "Cream Cheese" || item.name === "Parmesan Cheese"),
        ],
    image: './src/assets/sun-dried-tomato-spaghetti.avif',
    instructions:'./src/instructions/sun-dried-tomato-spaghetti.pdf',
    link: 'https://www.hellofresh.com/recipes/sun-dried-tomato-spaghetti-6231ef8d59a1d65a30536f97'
    },
    { name: 'Homestyle Turkey & Biscuit Pot Pie',
    ingredients:  [
        ...proteins.filter(item => item.name === "Ground Turkey"),
        ...produce.filter(item => item.name === "Carrots" || item.name === "Celery"
        || item.name === "Yellow Onion" || item.name === "Garlic" || item.name === "Thyme"),
        ...grain.filter(item => item.name === "Buttermilk Biscuits"),
        ...sauce.filter(item => item.name === "Chicken Stock Concentrate"),
        ...dairy.filter(item => item.name === "Cream Cheese"),
        ...bakingGoods.filter(item => item.name === "Flour"),
        ],
    image: './src/assets/homestyle-chicken-biscuit-pot-pie.avif',
    instructions:'./src/instructions/homestyle-chicken-biscuit-pot-pie.pdf',
    link: 'https://www.hellofresh.com/recipes/homestyle-chicken-biscuit-pot-pie-5f049500d95a4007c84095f2'
    },
    
    // { name: 'template',
    // ingredients: '',
    // image: './src/assets/',
    // instructions:'./src/instructions/',
    // link: ''
    // },
    //sides
    { name: 'Potato Wedges',
    ingredients: [
        ...produce.filter(item => item.name === "Yukon Gold Potato"),
        ...seasoning.filter(item => item.name === "Smoked Paprika"),
        ],
    image: './src/assets/potato-wedges.jpg',
    instructions:'./src/instructions/gouda-pork-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
    },
    { name: 'Zucchini Spears',
    ingredients: [
        ...produce.filter(item => item.name === "Zucchini" || item.name === "Garlic"),
        ...sauce.filter(item => item.name === "Mayonnaise" ),
        ...seasoning.filter(item => item.name === "Dried Oregano"),
        ...driedGoods.filter(item => item.name === "Bread Crumbs"),
        ],
    image: './src/assets/zucchini-spears.webp',
    instructions:'./src/instructions/melty-monterey-jack-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5dadc36bcd481422887d8d73'
    },
    { name: 'Oven Gold Potatoes',
    ingredients: [
        ...produce.filter(item => item.name === "Yukon Gold Potato"),
        ...seasoning.filter(item => item.name === "Fry Seasoning"),
        ],
    image: './src/assets/oven-gold-potatoes.jpg',
    instructions: './src/instructions/ancho-bbq-sloppy-joespdf.pdf',
    link: 'https://www.hellofresh.com/recipes/ancho-bbq-sloppy-joes-6231e882e5574621ea0c8d10'
    },
    { name: 'Cheesy Loaded Potato Rounds',
    ingredients: [
        ...proteins.filter(item => item.name === 'Bacon'),
        ...produce.filter(item => item.name === "Yellow Onion" || item.name === "Scallions"),
        ...dairy.filter(item => item.name === "Pepper Jack Cheese" || item.name === 'Sour Cream'),
        ...seasoning.filter(item => item.name === "Fry Seasoning"),
        ],
    image: './src/assets/cheesy-loaded-potato-rounds.jpg',
    instructions:'./src/instructions/bacon-buckaroo-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/bacon-buckaroo-burgers-60f82814e088b95c6b25fb6e'
    },
    
    //sauces
    { name: 'Lime Crema',
    ingredients: [
        ...produce.filter(item => item.name === "Lime"),
        ...seasoning.filter(item => item.name === "Smoked Paprika"),
        ...sauce.filter(item => item.name === "Mayonnaise" || item.name === "Sour Cream"), 
        ],
    image: './src/assets/lime-crema.jpg',
    instructions:'./src/instructions/gouda-pork-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/gouda-pork-burgers-5e838042d6f999558005b0da'
    },
    { name: 'Garlic Mayo',
    ingredients: [
        ...sauce.filter(item => item.name === "Mayonnaise" ),
        ...produce.filter(item => item.name === "Garlic"),
        ],
    image: './src/assets/garlic-mayonnaise.webp',
    instructions:'./src/instructions/melty-monterey-jack-burgers.pdf',
    link: 'https://www.hellofresh.com/recipes/melty-monterey-jack-burgers-5e25f552b9721f76446c7585'
    },
    ]
   

export default recipes
   
   
    // || item.name === ""
    // const templateIngredients = [
    // ...proteins.filter(item => item.name === ""),
    // ...produce.filter(item => item.name === ""),
    // ...grain.filter(item => item.name === ""),
    // ...sauce.filter(item => item.name === ""),
    // ...cannedGoods.filter(item => item.name === ""),
    // ...driedGoods.filter(item => item.name === ""),
    // ...seasoning.filter(item => item.name === ""),
    // ...dairy.filter(item => item.name === ""),
    // ...bakingGoods.filter(item => item.name === ""),
    // ...frozenFood.filter(item => item.name === ""),
    // ...snack.filter(item => item.name === "")
    // ]

    

