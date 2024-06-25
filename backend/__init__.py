from pymongo import MongoClient
from flask import Flask, jsonify

uri = "mongodb://postgres.waffles@cluster-url/mydatabase?retryWrites=true&w=majority&appName=Twinstagram"

def create_app():
    app = Flask(__name__)
    
        
        # Register blueprints here
        from . import profile
        app.register_blueprint(profile.bp)

        from . import feed
        app.register_blueprint(feed.bp)
        
        return app
    
   
