from flask import Blueprint, render_template, current_app,session, redirect

bp = Blueprint('feed', __name__, url_prefix='/feed')

@bp.route('/')
def index():
    if 'username' not in session:
        return redirect('/login')
    
    client = current_app.config['MONGO_CLIENT']
    db = client.twinstagram
    posts = list(db.posts.find().sort('created_at', -1))
    user = db.accounts.find_one({"username": session['username']})

     
    return render_template('feed/index.html', posts=posts)



