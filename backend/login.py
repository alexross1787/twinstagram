from flask import Blueprint, jsonify, session, current_app, request
from werkzeug.security import check_password_hash

bp = Blueprint('login', __name__, url_prefix='/login')

@bp.route('/', methods=['POST'])
def login():
    client = current_app.config['MONGO_CLIENT']
    db = client.twinstagram

    data = request.get_json()  # Get the JSON data from the request
    if not data:
        return jsonify({'status': 'error', 'message': 'Invalid input'}), 400

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'status': 'error', 'message': 'Username and password required'}), 400

    user = db.accounts.find_one({"username": username})

    if user and check_password_hash(user['password'], password):
        session['user_id'] = str(user['_id'])
        session['username'] = username
        return jsonify({
            'status': 'success',
            'message': 'Login successful!',
            'username': username
        }), 200
    else:
        return jsonify({'status': 'error', 'message': 'Invalid username or password'}), 401