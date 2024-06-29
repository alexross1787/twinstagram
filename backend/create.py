from flask import Blueprint, render_template, current_app, request, url_for, redirect

bp = Blueprint('create', __name__, url_prefix='/create')


@bp.route('/create', methods=['GET', 'POST'])
def create_post():
    if request.method == 'POST':
        post_image = request.form['post_image']
        post_caption = request.form['post_caption']
        
        client = current_app.config['MONGO_CLIENT']
        db = client.get_database('Twinstagram')
        posts_collection = db.posts

        new_post = {
            'image': post_image,
            'caption': post_caption,
            'username': 'username'
        }
        posts_collection.insert_one(new_post)

        return redirect('/feed')
    
    return render_template('create.html')



