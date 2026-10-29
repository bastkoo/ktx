from flask import Flask
from flask_cors import CORS
from .config import Config
from .extensions import db


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(
        app,
        resources={
            r"/*": {
                "origins": ["http://localhost:5173"]
            }
        }
    )

    db.init_app(app)

    @app.route("/")
    def home():
        return {
            "message": "KTX Backend is running!",
            "status": "success"
        }

    return app