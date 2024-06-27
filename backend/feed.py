from flask import Blueprint, render_template

bp = Blueprint('feed', __name__, url_prefix='/feed')

@bp.route('/')
def index():
    return render_template('feed/index.html')

