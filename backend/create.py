from flask import Blueprint, render_template, current_app, request, url_for, redirect

bp = Blueprint('create', __name__, url_prefix='/create')


@bp.route('/')
def create():
  
    
    return render_template('create/index.html')


# @bp.route('/create_post', methods=['POST'])
# def create_post():
#     image_url = request.form.get('post-image')
#     post_caption = request.form.get('post-caption')

#     # save to database
#     client = current_app.config['MONGO_CLIENT']
#     db = client.twinstagram
#     db.posts.insert_one()

