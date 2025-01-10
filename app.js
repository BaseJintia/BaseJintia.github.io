const products = [
    {
      id: "1",
      productName: "Territorio 1",
      img: "https://raw.githubusercontent.com/BaseJintia/BaseJintia.github.io/refs/heads/main/Tarjetas/Territorio%201.png",
    },
    {
      id: "2",
      productName: "Territorio 2",
      img: "https://raw.githubusercontent.com/BaseJintia/BaseJintia.github.io/refs/heads/main/Tarjetas/Territorio%202.png",
    },
    {
      id: "3",
      productName: "Territorio 3",
      img: "https://raw.githubusercontent.com/BaseJintia/BaseJintia.github.io/refs/heads/main/Tarjetas/Territorio%203.png",
    },
    {
      id: "4",
      productName: "Territorio 4",
      img: "https://raw.githubusercontent.com/BaseJintia/BaseJintia.github.io/refs/heads/main/Tarjetas/Territorio%204.png",
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
            <h2>${product.productName}</h2>
            <img src="${product.img}">
            `;
        shopContent.append(content);
      });
      noResults.style.display = "none";
    }
  };
  
  const handleSearch = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => product.id.toLowerCase().startsWith(searchTerm));
  
    displayProducts(filteredProducts);
  };
  
  displayProducts(products);
  
  searchInput.addEventListener("input", handleSearch);