from flask import Flask, jsonify
from pymongo import MongoClient




def create_app():
    app = Flask(__name__)
    
    #establish MongoDB connection
    uri = "mongodb+srv://postgres:waffles@twinstagram.id1cxoz.mongodb.net/?retryWrites=true&w=majority&appName=Twinstagram"
    client = MongoClient(uri)

    app.config['MONGO_CLIENT'] = client

    

    @app.route('/')
    def index():
        return "This is the index"
    

    

    
    # Register blueprints 
    from . import profile
    app.register_blueprint(profile.bp)

    from . import feed
    app.register_blueprint(feed.bp)
    
    return app
