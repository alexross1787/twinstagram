from flask import Blueprint, render_template, session, current_app, request, url_for, redirect, flash
from werkzeug.security import check_password_hash


bp = Blueprint('login', __name__, url_prefix='/login')



@bp.route('/', methods=['GET','POST'])
def login():
    client = current_app.config['MONGO_CLIENT']
    db = client.twinstagram
    

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # print(username, password)
        user = db.accounts.find_one({"username": username})

        if user and check_password_hash(user['password'], password):
            session['user_id'] = str(user['_id'])
            session['username'] = username
            flash('Login successful!', 'success')
            return redirect('/feed')
        else:
            flash('Invalid username or password', 'error')
            return redirect('/login')


    
    return render_template('login/index.html')