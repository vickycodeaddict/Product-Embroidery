# **Embroidery Feature Practical Task**

## **Overview**

This project demonstrates the implementation of a custom **Embroidery Feature** for a Shopify store. The feature allows users to personalize products by adding embroidery options, including text, font, and color. The embroidery selections are seamlessly integrated with the Shopify cart as line item properties, with dynamic pricing adjustments based on user selections.

### **Live Demo**  
Explore the feature live on the example product:  
🔗 [Example T-Shirt Product](https://wiro-practical-vivek.myshopify.com/products/example-t-shirt)  
Password: **vivek**

### **PR**
[Embroidery Function](https://github.com/vickycodeaddict/Product-Embroidery/pull/1)

---

## **Features**

1. **Embroidery Customization**:
   - Users can personalize products with:
     - Embroidery Text (with character limit enforcement).
     - Font selection.
     - Color selection (with additional charges per color).

2. **Cart Integration**:
   - Embroidery properties are added as line item properties in the cart.
   - Dynamic pricing adjustments based on embroidery options.

3. **Admin Management**:
   - Uses Shopify **metaobjects** for managing colors and fonts.
   - Product-specific controls using **metafields**:
     - Enable/Disable embroidery.
     - Select available fonts and colors.
     - Set character limits for embroidery text.

---

## **Technical Implementation**

### **Metaobjects**
- **Colors Metaobject**:
  - Includes a list of embroidery colors and their associated prices.
- **Fonts Metaobject**:
  - Includes a list of available embroidery fonts.

### **Product Metafields**
- **Enable Embroidery**: Toggles the embroidery feature for the product.
- **Colors**: Links to the Colors metaobject.
- **Fonts**: Links to the Fonts metaobject.
- **Character Limit**: Sets a maximum character limit for the embroidery text.

### **Frontend Features**
- **Dynamic Embroidery Section**:
  - Visible only if the product has embroidery enabled.
  - Users can input text, select a font, and choose a color.
- **Validation**:
  - Character limit enforcement for text input.
  - Real-time display of additional costs for selected colors.

### **Cart Integration**
- Adds embroidery details (text, color, font) as line item properties.
- Calculates and reflects additional charges in the cart subtotal and total.

---

## **How to Use**

1. **Navigate to the Example Product**:
   - [Example T-Shirt](https://wiro-practical-vivek.myshopify.com/products/example-t-shirt)
   - Password: **vivek**

2. **Customize Embroidery Options**:
   - Enter text for embroidery (within the character limit).
   - Select a font and a color.

3. **Add to Cart**:
   - Review the embroidery details in the cart.
   - Observe the additional charges reflected in the subtotal and total.
