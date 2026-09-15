const API_URL='https://dummyjson.com/products';
const productContainer=document.getElementById('product-list');
const paginationContainer=document.getElementById('pagination');

let currentPage=1;
let pagesize=10;
// let allProducts=[];
let totalProducts=0

// if want to the page skip check and so we need to do these
// async function fetchProduts(currentPage){
//     let skip=(currentPage-1)*pagesize
// try{
//     const result=await fetch(`${API_URL}?limit=${pagesize}&skip=${skip}`);
//     const data = await result.json();
//    let  allProducts=data.products;
//     totalProducts=allProducts.length;
//     renderPage(allProducts);
//     renderPagination();
// }catch(err){
//     console.error(err);
// }
// }

async function fetchProducts(page) {
    const skip = (page - 1) * pagesize;
    const url = `${API_URL}?limit=${pagesize}&skip=${skip}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      totalProducts = data.total;
      renderPage(data.products);
      renderPagination();
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

// function renderPage(currentPage){
//     productContainer.innerHTML='';
//     const start=(currentPage-1)*pagesize;
//     const end=currentPage*pagesize;
//     const pageProduct=allProducts.slice(start,end);
//     pageProduct.forEach((product)=>{
//         const card=document.createElement('div');
//         const img=document.createElement('img');
//         img.src=product.thumbnail;
//         const title=document.createElement('div');
//         title.textContent=product.title;
//         const price=document.createElement('div')
//         price.textContent=product.price

//         card.appendChild(img);
//         card.appendChild(title);
//         card.appendChild(price)
//         productContainer.appendChild(card)
//     })
// }

function renderPage(products){
    productContainer.innerHTML='';
   
    products.forEach((product)=>{
        const card=document.createElement('div');
        const img=document.createElement('img');
        img.src=product.thumbnail;
        const title=document.createElement('div');
        title.textContent=product.title;
        const price=document.createElement('div')
        price.textContent=product.price

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price)
        productContainer.appendChild(card)
    })
}

// function renderPagination(){
//     paginationContainer.innerHTML='';
//     const totalPages=Math.ceil(allProducts.length/pagesize);
//     for(let i=1;i<=totalPages;i++){
//         const button=document.createElement('button');
//         button.textContent=i;
//         if(i==currentPage){
//             button.disabled=true;

//         }
//         button.addEventListener('click',()=>{
//             currentPage=i;
//             renderPage(currentPage);
//             renderPagination();
//         })
//         paginationContainer.appendChild(button)
//     }
   
// }

function renderPagination(){
    paginationContainer.innerHTML='';
    const totalPages=Math.ceil(totalProducts/pagesize);
    for(let i=1;i<=totalPages;i++){
        const button=document.createElement('button');
        button.textContent=i;
        if(i==currentPage){
            button.disabled=true;

        }
        button.addEventListener('click',()=>{
            currentPage=i;
            fetchProducts(currentPage);
            // renderPagination();
        })
        paginationContainer.appendChild(button)
    }
   
}



fetchProducts(currentPage);
