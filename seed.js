const mongoose = require("mongoose");
const product = require("./modules/product");
const createdocument = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/farmStand");
  } catch {
    console.log("failed to connect");
  }
};
createdocument();
const proddata = async () => {
  try {
    prod1 = new product({
      name: "Red Grapefruits",
      price: 21,
      category: "fruit",
      prodimage:
        "https://i5.walmartimages.com/asr/c23d870b-225f-4818-afe3-0b4add48afe6.b78126a7bd277fd29afbeb21dac10e04.jpeg",
      logo: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-fruit-vacation-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
      onsale: false,
      discount: 0,
      rating: 2,
      qty: 1,
      unit: "kg",
      address: { street: "Pooja Warehouse", state: "Mumbai", country: "India" },
      shelflife: 30,
    });
    prod2 = new product({
      name: "Tomatoes",
      price: 49,
      category: "vegetable",
      prodimage:
        "https://i5.walmartimages.com/asr/1397cd52-8636-48d7-90a7-3c15d4c3967c.7544db07683e1eed49dbd813de13e291.jpeg",
      logo: "https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/344/external-vegetable-supermarket-photo3ideastudio-flat-photo3ideastudio.png",
      onsale: true,
      discount: 35,
      rating: 4,
      qty: 3,
      unit: "kg",
      address: { street: "Pooja Warehouse", state: "Mumbai", country: "India" },
      shelflife: 30,
    });
    prod3 = new product({
      name: "Cottage Cheese",
      price: 70,
      category: "dairy",
      prodimage:
        "https://i5.walmartimages.com/asr/97f91373-82f1-4c28-9b54-deeccfffd057_1.dec4a85ec3412531061f8d35e8a418df.jpeg",

      logo: "https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/344/external-dairy-baking-tools-inipagistudio-lineal-color-inipagistudio.png",
      onsale: false,
      discount: 0,
      rating: 3,
      qty: 1,
      unit: "packet",
      shelflife: 10,
    });
    prod4 = new product({
      name: "Perssimons",
      price: 41,
      category: "fruit",
      prodimage:
        "https://i5.walmartimages.ca/images/Enlarge/685/150/6000198685150.jpg",

      logo: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-fruit-vacation-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
      onsale: false,
      rating: 2,
      qty: 100,
      unit: "g",
      shelflife: 49,
    });
    prod5 = new product({
      name: "Brinjal",
      price: 49,
      category: "vegetable",
      prodimage:
        "https://i5.walmartimages.ca/images/Enlarge/094/510/6000200094510.jpg",

      logo: "https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/344/external-vegetable-supermarket-photo3ideastudio-flat-photo3ideastudio.png",
      onsale: true,
      rating: 3,
      qty: 1,
      unit: "kg",
      address: {
        street: "Mandela Warehouse",
        state: "tsaichung",
        country: "India",
      },
      shelflife: 30,
    });
    prod6 = new product({
      name: "Chocolate Milk",
      price: 75,
      category: "dairy",
      prodimage:
        "https://i5.walmartimages.com/asr/794f1210-8278-42b4-ba70-a94b89dfa104.f68257b4d860073dc6fa21438657ea8c.jpeg",
      logo: "https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/344/external-dairy-baking-tools-inipagistudio-lineal-color-inipagistudio.png",
      onsale: true,
      discount: 15,
      rating: 5,
      qty: 1,
      unit: "ounce",
      shelflife: 120,
    });
    const res = await product.insertMany([
      prod1,
      prod2,
      prod3,
      prod4,
      prod5,
      prod6,
    ]);
    console.log(res);
  } catch {
    console.log("internal error");
  }
};

const update = async () => {
  const re = await product.findOneAndUpdate(
    { name: "Brinjal" },
    { discount: 10 },
    { new: true, runValidators: true }
  );
  console.log(re);
};
update();
