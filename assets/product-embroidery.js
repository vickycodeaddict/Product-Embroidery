
function getEmbroideryColorPrice() {
    const p_radios = document.getElementsByName("properties[embroidery_color]");
    
    const checkedRadio = Array.from(p_radios).find((radio) => radio.checked);
  
    return checkedRadio
      ? checkedRadio.getAttribute("data-price")
      : p_radios[0]?.getAttribute("data-price");
}
document.addEventListener('DOMContentLoaded', function () {

    /* Toggle embroidery section */
    const expandEmbroidery = document.getElementById('expandEmbroidery');
    const embroideryContent = document.getElementById('embroideryContent');

    if (expandEmbroidery && embroideryContent) {

        expandEmbroidery.addEventListener('change', function () {
            embroideryContent.style.display = expandEmbroidery.checked ? 'block' : 'none';
        });
    }

    /* Embroidery price */
    const initialPrice = getEmbroideryColorPrice();
    document.querySelector('.embroidery_color_price').innerHTML = initialPrice;
});

document.addEventListener("change", (event) => {
    if (event.target.name === "properties[embroidery_color]") {
      const selectedPrice = getEmbroideryColorPrice();
      document.querySelector('.embroidery_color_price').innerHTML = selectedPrice;
    }
});


  

  
  