document.addEventListener('DOMContentLoaded', function () {
    const expandEmbroidery = document.getElementById('expandEmbroidery');
    const embroideryContent = document.getElementById('embroideryContent');
    const colorOptionsContainer = document.getElementById('color-options');
    const fontOptionsContainer = document.getElementById('font-options');
    const priceDisplay = document.querySelector('.embroidery_color_price');
    const embroideryVariantField = document.querySelector('input[name="properties[embroidery_variant_id]"]');
    let variants = [];

    if (expandEmbroidery && embroideryContent) {
        expandEmbroidery.addEventListener('change', function () {
            embroideryContent.style.display = expandEmbroidery.checked ? 'block' : 'none';
        });
    }

    fetch(`/products/embroidery.js`)
        .then((response) => response.json())
        .then((product) => {
            variants = product.variants;

            const uniqueColors = new Set();
            const uniqueFonts = new Set();

            variants.forEach((variant) => {
                if (variant.option1 && !uniqueColors.has(variant.option1)) {
                    uniqueColors.add(variant.option1);
                    const colorOption = `
                        <div class="flex">
                            <label class="cursor-pointer">
                                <input type="radio" name="properties[embroidery_color]" value="${variant.option1}"
                                    class="hidden peer" data-price="${variant.price / 100}">
                                <div class="h-16 w-16 rounded-full bg-${variant.option1} border-2 peer-checked:ring-1 peer-checked:ring-black border-gray-200">&nbsp;</div>
                                <div class="mt-2"><p class="text-sm">${variant.option1}</p></div>
                            </label>
                        </div>`;
                    colorOptionsContainer.innerHTML += colorOption;
                }
            });

            variants.forEach((variant) => {
                if (variant.option2 && !uniqueFonts.has(variant.option2)) {
                    uniqueFonts.add(variant.option2);
                    const fontOption = `
                        <div class="flex w-full">
                            <label class="w-full cursor-pointer">
                                <input type="radio" name="properties[embroidery_font]" value="${variant.option2}"
                                    class="hidden peer">
                                <div class="border-2 border-gray-400 py-3 w-full text-center rounded-md peer-checked:border-2 peer-checked:border-black peer-checked:font-bold">
                                    <p class="text-sm">${variant.option2}</p>
                                </div>
                            </label>
                        </div>`;
                    fontOptionsContainer.innerHTML += fontOption;
                }
            });

            if (variants.length > 0) {
                embroideryVariantField.value = variants[0].id;
            }

            const initialPrice = getEmbroideryColorPrice();
            priceDisplay.innerHTML = initialPrice;
        })
        .catch((error) => console.error('Error fetching product data:', error));

    function getEmbroideryColorPrice() {
        const radios = document.getElementsByName('properties[embroidery_color]');
        const checkedRadio = Array.from(radios).find((radio) => radio.checked);
        return checkedRadio
            ? checkedRadio.getAttribute('data-price')
            : radios[0]?.getAttribute('data-price') || '0.00';
    }

    function mapVariantId() {
        const selectedColor = document.querySelector('input[name="properties[embroidery_color]"]:checked')?.value;
        const selectedFont = document.querySelector('input[name="properties[embroidery_font]"]:checked')?.value;

        if (selectedColor && selectedFont && variants.length > 0) {
            const matchedVariant = variants.find(
                (variant) =>
                    variant.option1 === selectedColor && variant.option2 === selectedFont
            );

            if (matchedVariant) {
                embroideryVariantField.value = matchedVariant.id;
                console.log('Variant ID updated:', embroideryVariantField.value);
            } else {
                console.log('No matching variant found.');
            }
        }
    }

    document.addEventListener('change', (event) => {
        if ( event.target.name === 'properties[embroidery_color]' || event.target.name === 'properties[embroidery_font]') {
            mapVariantId();
        }
        if (event.target.name === 'properties[embroidery_color]') {
            const selectedPrice = getEmbroideryColorPrice();
            priceDisplay.innerHTML = selectedPrice;
        }
    });
});
