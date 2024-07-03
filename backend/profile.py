from flask import Blueprint, render_template, current_app, session, redirect, request
from bson.objectid import ObjectId
from pymongo import MongoClient

bp = Blueprint('profile', __name__, url_prefix='/profile')

@bp.route('/')
def profile():
    if 'user_id' not in session:
        return redirect('/login')
    
    # db
    user_id = session['user_id']
    client = current_app.config['MONGO_CLIENT']
    db = client.twinstagram
    user = db.accounts.find_one({ '_id': ObjectId(user_id)}) #get username based on ID
    
    username = user.get('username')

    user = db.accounts.find_one({'_id': ObjectId(user_id)}) 
    posts = list(db.posts.find({'username': username}).sort('created_at', -1))
    print(username)

    # count followers
    def count_followers(user_id):
        return db.follows.count_documents({ "following": user_id })

    # count following
    def count_following(user_id): 
        return db.follows.count_documents({ "follower": user_id})
    

    if user: 
        follower_count = count_followers(user_id)
        following_count = count_following(user_id)
        return render_template('profile/index.html', user=user, follower_count=follower_count, following_count=following_count, posts=posts)
    else: 
        return redirect('/login')

