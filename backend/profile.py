from flask import Blueprint, render_template, current_app


bp = Blueprint('profile', __name__, url_prefix='/profile')

@bp.route('/')
def index():
    return render_template('profile/index.html')

@bp.route('/profile/<username>')
def profile(username):
    return