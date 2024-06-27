from flask import Blueprint, render_template, current_app

bp = Blueprint('create', __name__, url_prefix='/create')

@bp.route('/')
def index():
    return render_template('create/index.html')

# @bp.route('/createpost', methods=['GET', 'POST'])
# def create():
#     client = current_app.config['MONGO_CLIENT']
#     db = client.get_database('Twinstagram')
#     posts_collection = db.users
#     posts = list(posts_collection.find())
    
    
#     return render_template('create/index.html', posts=posts)



