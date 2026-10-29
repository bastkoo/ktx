
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(
    app,
    resources={
        r"/*": {
            "origins": ["http://localhost:5173"]
        }
    }
)


@app.route("/")
def home():
    return {
        "message": "KTX Backend is running!",
        "status": "success"
    }


if __name__ == "__main__":
    app.run(debug=True)
