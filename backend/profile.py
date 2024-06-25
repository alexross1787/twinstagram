from flask import Blueprint, render_template, current_app


bp = Blueprint('profile', __name__, url_prefix='/profile')

@bp.route('/')
def index():
    client = current_app.config['MONGO_CLIENT']
    db = client.get_database('twinstagram')
    profiles_collection = db.profiles
    profiles = profiles_collection.find()
    profiles = list(profiles_collection.find()) 

     # Print profiles to console for debugging
    for profile in profiles:
        print(profile)

    # Optionally, you can return a rendered template with the profiles data
    return render_template('profile/index.html', profiles=profiles)

  


