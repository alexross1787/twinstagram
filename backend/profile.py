from flask import Blueprint, render_template, current_app


bp = Blueprint('profile', __name__, url_prefix='/profile')

@bp.route('/')
def index():
    client = current_app.config['MONGO_CLIENT']
    db = client.twinstagram
    accounts = list(db.accounts.find())

    return render_template('profile/index.html', accounts=accounts)

# # @bp.route('/<username>')
# def profile