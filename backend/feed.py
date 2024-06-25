from flask import Blueprint, render_template, request, jsonify, g

bp = Blueprint('feed', __name__, url_prefix='/feed')

@bp.route('/')
def index():
    posts = list(g.mongo.post.find())
    return render_template('feed/index.html', posts=posts)

@bp.route('/create', methods=['POST'])
def create_post():
    data = request.json
    g.mongo.post.insert_one(data)
    return jsonify({'status': 'success', "message": "Post added"})
