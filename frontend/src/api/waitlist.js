const ENDPOINT = import.meta.env.VITE_API_URL || "";

// inscription liste d'attente
export const joinWaitlist = async (form) => {

    try {
        //post
        const response = await fetch(`${ENDPOINT}/api/waitlist`, {
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

        if (import.meta.env.MODE === "development") {
            console.error("Erreur lors de l'inscription : ", error);
        }
        throw error;
    }
}

// inscription rapide depuis la pop-up (e-mail seul)
export const joinWaitlistQuick = async (form) => {

    try {
        const response = await fetch(`${ENDPOINT}/api/waitlist/quick`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        if (!response.ok) {
            throw await response.json();
        }

        return await response.json();
    } catch (error) {

        if (import.meta.env.MODE === "development") {
            console.error("Erreur lors de l'inscription : ", error);
        }
        throw error;
    }
}
