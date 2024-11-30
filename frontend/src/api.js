export const sendMessageToAI = async (message) => {
    try {
        const response = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        return data.response || "Error: No response from AI.";
    } catch (error) {
        return "Error: Unable to connect to the server.";
    }
};
