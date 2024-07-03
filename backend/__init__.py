from flask import Flask, redirect
from pymongo import MongoClient
from flask_cors import CORS
import os
from dotenv import load_dotenv

def create_app():
    app = Flask(__name__)

    # Load environment variables
    load_dotenv()

    # Configuration
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    uri = os.getenv('MONGO_URI')

    try:
        # Establish MongoDB connection
        client = MongoClient(uri)
        app.config['MONGO_CLIENT'] = client

        # Initialize the database object
        app.config['twinstagram'] = os.getenv('twinstagram')
        db = client[app.config['twinstagram']]
        app.config['MONGO_DB'] = db

        # CORS setup
        CORS(app, origins="http://localhost:5000",
             allow_headers=["Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
             supports_credentials=True)

        # Routes
        @app.route('/')
        def index():
            return redirect('/feed')

        @app.route('/debug')
        def debug():
            try:
                db = app.config['MONGO_DB']
                accounts = list(db.accounts.find())
                print(accounts)
                return "Debug route"
            except Exception as e:
                return f"Error in debug route: {e}"

        # Register blueprints
        from .profile import bp as profile_bp
        app.register_blueprint(profile_bp)

        from .feed import bp as feed_bp
        app.register_blueprint(feed_bp)

        from .post import bp as post_bp
        app.register_blueprint(post_bp)

        from .signup import bp as signup_bp
        app.register_blueprint(signup_bp)

        from .login import bp as login_bp
        app.register_blueprint(login_bp)

        from .logout import bp as logout_bp
        app.register_blueprint(logout_bp)

    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")
        # Handle connection failure gracefully (e.g., log error, raise exception)

    return app
