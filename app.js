const products = [
    {
      productName: "Territorio 1",
      price: 15,
      img: "https://raw.githubusercontent.com/BaseJintia/BaseJintia.github.io/5f803eb0c39553bb81ffdff9b3f6fd2a3f1c56d5/Tarjetas/Territorio%201.png",
    },
    {
      productName: "Territorio 2",
      price: 20,
      img: "https://raw.githubusercontent.com/BaseJintia/BaseJintia.github.io/5f803eb0c39553bb81ffdff9b3f6fd2a3f1c56d5/Tarjetas/Territorio%202.png",
    },
    {
      productName: "Bananita",
      price: 30,
      img: "https://res.cloudinary.com/pabcode/image/upload/v1699871193/e-commerce/mopgcvdiepr8axkazmcp.png",
    },
    {
      productName: "Compu",
      price: 40,
      img: "https://res.cloudinary.com/pabcode/image/upload/v1700045911/e-commerce/compu_unvcoi.png",
    },
  ];
  const shopContent = document.getElementById("shopContent");
  const searchInput = document.getElementById("searchInput");
  const noResults = document.getElementById("noResults");
  
  const displayProducts = (productList) => {
    shopContent.innerHTML = "";
  
    if (productList.length === 0) {
      noResults.style.display = "block";
    } else {
      productList.forEach((product) => {
        const content = document.createElement("div");
        content.className = "card-products";
        content.innerHTML = `
            <img src="${product.img}">
            <h3>${product.productName}</h3>
            
            
            `;
        shopContent.append(content);
      });
      noResults.style.display = "none";
    }
  };
  
  const handleSearch = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => product.productName.toLowerCase().startsWith(searchTerm));
  
    displayProducts(filteredProducts);
  };
  
  displayProducts(products);
  
  searchInput.addEventListener("input", handleSearch);