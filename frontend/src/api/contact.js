const ENDPOINT = import.meta.env.VITE_API_URL;

// create
export const createContact = async (form) => {

    try {
        //post
        const response = await fetch(`${ENDPOINT}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        // erreur
        if (!response.ok) {
            throw await response.json();
        }

        // retour ok
        return await response.json();
    } catch (error) {

        console.error("Erreur lors de l'envoi du formulaire : ", error);
        throw error;
    }
}
