import openai

# Set up OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

def get_ai_response(user_message):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"User: {user_message}\nAI:",
            max_tokens=150,
            temperature=0.7,
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return "Error: Unable to process the request."
