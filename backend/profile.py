from flask import ( Blueprint, render_template )
import json

profiles = json.load(open('profiles.json'))
print(profiles)

bp = Blueprint('profile', __name__, url_prefix='/profile')

@bp.route('/')
def index():
    return render_template('index.html', profiles=profiles)


