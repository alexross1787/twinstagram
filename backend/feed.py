from flask import Blueprint, render_template, current_app

bp = Blueprint('feed', __name__, url_prefix='/feed')

@bp.route('/')
def index():
    client = current_app.config['MONGO_CLIENT']
    db = client.twinstagram
    accounts = list(db.accounts.find())
    print(accounts)
    
    return render_template('feed/index.html', accounts=accounts)



