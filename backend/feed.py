from flask import Blueprint
import json 

posts = json.load(open("profiles.json"))

bp = Blueprint('feed', __name__, url_prefix='/feed')

@bp.route('/')
def index():
    return "this is the feed index"