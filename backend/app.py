from flask import Flask, request, jsonify
from flask_cors import CORS
from chat_ai import get_ai_response

app = Flask(__name__)
CORS(app)

@app.route("/api/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    ai_response = get_ai_response(user_message)
    return jsonify({"response": ai_response})

if __name__ == "__main__":
    app.run(debug=True)
