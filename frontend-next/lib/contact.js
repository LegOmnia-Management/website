const ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export const createContact = async (form) => {
  try {
    const response = await fetch(`${ENDPOINT}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (!response.ok) throw await response.json();
    return await response.json();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Erreur lors de l\'envoi du formulaire : ', error);
    }
    throw error;
  }
};
