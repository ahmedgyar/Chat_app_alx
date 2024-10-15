export const baseUrl = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body) // Ensure the body is properly formatted as JSON
        });

        const data = await response.json();

        if (!response.ok) {
            let message;
            if (data && data.message) {
                message = data.message;
            } else {
                message = "An error occurred";
            }
            return { error: true, message };
        }

        return data;
    } catch (error) {
        // Handle any network or unexpected errors
        return { error: true, message: error.message || "Network error" };
    }
};

export const getRequest = async (url) => {
    const response = await fetch(url);

    const data = await response.json()

    if (!response.ok) {
        let message = "An error occured...";

        if (data?.message) {
            message = data.message
        }

        return { error: true, message };
    }

    return data;
}