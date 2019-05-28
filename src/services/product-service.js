export default class ProductService {
  products = [
    {
      id: 1,
      name: "100% Ready Kit",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/O1_540x.png?v=1554528793",
      price: 189.9,
      category: "Starter Kit",
      weight: 0,
      available: true,
      description:
        "Take an organized step when moving away from home, with a 100% Ready Kit, and focus on socializing and discovering the new city you live in. This Kit gives you free access to the Starter Kit Benefits. This kit includes Room set, Kitchen set, Bathroom set, Laundry set, Cleaning set and, Study set." +
        "The entire kit will be delivered in one box with necessary padding preventing breakages during transportation and handling...",
      customization: [
        {
          matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
          towelcolor: ["white", "cream", "skyblue"],
          beddingcolor: ["white", "lightblue", "lightgrey"]
        },
        {
          name: [
            {
              matresssize: "Matters Size",
              towelcolor: "Towel Color",
              beddingcolor: "Bedding Color"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "HTH Tailored 100% Ready Kit",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/O4_540x.png?v=1554528799",
      price: 181.9,
      category: "Starter Kit",
      weight: 0,
      available: true,
      description: "Take an organized step...",
      customization: [
        {
          matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
          towelcolor: ["white", "cream", "skyblue"],
          beddingcolor: ["white", "lightblue", "lightgrey"]
        },
        {
          name: [
            {
              matresssize: "Matters Size",
              towelcolor: "Towel Color",
              beddingcolor: "Bedding Color"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Essentials Kit",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/EK_540x.png?v=1554528797",
      price: 169.9,
      category: "Starter Kit",
      weight: 0,
      available: false,
      description: "Take an organized step...",
      customization: [
        {
          matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
          towelcolor: ["white", "cream", "skyblue"],
          beddingcolor: ["white", "lightblue", "lightgrey"]
        },
        {
          name: [
            {
              matresssize: "Matters Size",
              towelcolor: "Towel Color",
              beddingcolor: "Bedding Color"
            }
          ]
        }
      ]
    }
  ];

  individualProducts = [
    {
      id: 1,
      name: "Room Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/RS_540x.png?v=1554528805",
      price: 189.9,
      category: "Individual Sets",
      weight: 0,
      available: true,
      description: "",
      customization: [
        {
          matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
          beddingcolor: ["white", "lightblue", "lightgrey"]
        },
        {
          name: [
            {
              matresssize: "Matters Size",
              beddingcolor: "Bedding Color"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Bathroom Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/BS_540x.png?v=1554528795",
      price: 181.9,
      category: "Individual Sets",
      weight: 0,
      available: true,
      description: "",
      customization: [
        {
          towelcolor: ["white", "cream", "skyblue"]
        },
        {
          name: [
            {
              towelcolor: "Towel Color"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Kitchen Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/imageedit_1_5011035356_540x.png?v=1554528801",
      price: 169.9,
      category: "Individual Sets",
      weight: 0,
      available: false,
      description: "",
      customization: [
        {
          cookingmethod: ["Induction", "Electric", "Gas"]
        },
        {
          name: [
            {
              cookingmethod: "Cooking Method"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Cleaning & Laundry Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/LCS_540x.png?v=1554528796",
      price: 169.9,
      category: "Individual Sets",
      weight: 0,
      available: false,
      description: "",
      customization: []
    },
    {
      id: 5,
      name: "Study Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/SS_540x.png?v=1554528807",
      price: 169.9,
      category: "Individual Sets",
      weight: 0,
      available: false,
      description: "",
      customization: []
    }
  ];

  getAllProducts = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() === 0) {
          reject(new Error(`something bad happend`));
        } else {
          resolve(this.products);
        }
      }, 700);
    });
  };

  getProductById = async id => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() === 0) {
          reject(new Error(`something bad happend`));
        } else {
          resolve(
            this.products.filter((value, index, array) => {
              return value.id === parseInt(id);
            })
          );
        }
      }, 700);
    });
  };

  getRemainingProductById = async id => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() === 0) {
          reject(new Error(`something bad happend`));
        } else {
          resolve(
            this.products.filter((value, index, array) => {
              return value.id !== parseInt(id);
            })
          );
        }
      }, 700);
    });
  };

  getAllIndividualProducts = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() === 0) {
          reject(new Error(`something bad happend`));
        } else {
          resolve(this.individualProducts);
        }
      }, 700);
    });
  };
}
