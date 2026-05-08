export const WHATSAPP_NUMBER = "5492477534588";

export const WHATSAPP_DEFAULT_MESSAGE = "Hola AnBau, quería hacer una consulta.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
