from flask import Blueprint, render_template, current_app, request, url_for, redirect, session 
from bson.objectid import ObjectId
from datetime import datetime

bp = Blueprint('post', __name__, url_prefix='/post')


@bp.route('/', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        image_url = request.form.get('image_url')
        caption = request.form.get('post_caption')

        if image_url and caption:
            user_id = session.get('user_id') # get user ID

            if user_id:
                client = current_app.config['MONGO_CLIENT']
                db = client.twinstagram

                user = db.accounts.find_one({ '_id': ObjectId(user_id)}) #get username based on ID

                if user:
                    username = user.get('username')
                
                db.posts.insert_one({
                'username': username,
                'image_url': image_url,
                'caption': caption,
                'likes': 0, 
                'created_at': datetime.utcnow()
            })

            return redirect('/feed')
    

    return render_template('post/index.html')

@bp.route('/post/<post_id>/delete', methods=['POST'])
def delete(post_id):
    user_id = session.get('user_id')

    if user_id:
        client = current_app.config['MONGO_CLIENT']
        db = client.twinstagram

        post = db.posts.find_one({'_id': ObjectId(post_id), 'username': session['username']})

        if post: 
            db.posts.delete_one({'_id': ObjectId(post_id)})

    return redirect('/feed')