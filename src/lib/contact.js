export const CONTACT_EMAIL = "aryanpatil2006@gmail.com";

export const OPEN_CONTACT_EVENT = "open-contact-form";

export const openContactForm = () => {
  window.dispatchEvent(new Event(OPEN_CONTACT_EVENT));
};
