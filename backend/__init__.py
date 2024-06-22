# App Factory 
from flask import Flask


def create_app():
    app = Flask(__name__)

    #index route
    @app.route('/')
    def index():
        return "Twinstagram"
    
    # register profile blueprint
    from . import profile
    app.register_blueprint(profile.bp)

    from . import feed
    app.register_blueprint(feed.bp)

    
    return app