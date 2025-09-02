const whatsappNumber = 593998956672;
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export const getLinkMessage = (type, cartItems = []) => {
  let message = "";

  switch (type?.toUpperCase()) {
    case "SHOP":
      console.log('ENTRO');
      let total = 0;
      const itemsList = cartItems.map((item, i) => {
        const price = Number(item.price);
        const subtotal = item.quantity * price;
        total += subtotal;
        
        return `${i + 1}. ${item.name} (${item.weight})\n   🔢 Cantidad: ${item.quantity}\n   💲 Unitario: $${price.toFixed(2)}\n   🧾 Subtotal: $${subtotal.toFixed(2)}\n`;
      }).join("\n");

      message = `🛒 *Nueva intención de compra* 🍓✨\n📋 *Detalles de la orden:*\n\n${itemsList}\n--------------------------------\n💰 *Total: $${total.toFixed(2)}*\n--------------------------------\n\n🤝 Estoy interesado en concretar esta compra.\n📲 Espero su confirmación para coordinar la entrega 🚚.`;
    break;

    case 'REGULAR':
      message = "🍓 ¡Hola! Me encantan sus fresas naturales y auténticas 🌱✨. Deseo recibir productos frescos de ustedes de manera constante 📦🥰. ¿Podrían darme más información?";
    break;

    default:
      message =  "👋¡Hola! Estoy interesado en conocer más acerca de *Fresas Sarahí* 🍓✨. Me encantaría estar en contacto con ustedes 🤝😊";
  }

  return isMobile
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
};
