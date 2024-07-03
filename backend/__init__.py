from flask import Flask, jsonify, redirect
from pymongo import MongoClient


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'waffles'
   
    #establish MongoDB connection
    uri = "mongodb+srv://postgres:waffles@twinstagram.id1cxoz.mongodb.net/"
    client = MongoClient(uri)

    app.config['MONGO_CLIENT'] = client

    

    @app.route('/')
    def index():
        return redirect('/feed')
    
    
    @app.route('/debug')
    def debug():
        db = client.twinstagram
        accounts = list(db.accounts.find())
        print(accounts)
        return "debug route"

    
    # Register blueprints 
    from . import profile
    app.register_blueprint(profile.bp)

    from . import feed
    app.register_blueprint(feed.bp)

    from . import post 
    app.register_blueprint(post.bp)

    from . import signup
    app.register_blueprint(signup.bp)

    from . import login
    app.register_blueprint(login.bp)

    from . import logout
    app.register_blueprint(logout.bp)

    
    
    return app
