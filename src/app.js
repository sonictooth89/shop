const addProcuct = () => {
    const productName = document.getElementById('myInput1').value;
    const productPrice = document.getElementById('myInput2').value;

    const ul = document.getElementById('productUl');
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item list-group-item-warning');
    li.innerHTML = `${productName} <strong>${productPrice}€</strong>`;
    
    ul.appendChild(li);
    
    document.getElementById("myInput1").value = "";
    document.getElementById("myInput2").value = "";
}


