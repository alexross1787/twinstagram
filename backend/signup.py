from flask import Blueprint, render_template, session, current_app, request, url_for, redirect, flash
from pymongo.errors import DuplicateKeyError
from werkzeug.security import generate_password_hash, check_password_hash


bp = Blueprint('signup', __name__, url_prefix='/signup')



@bp.route('/', methods=['GET', 'POST'])
def signup():
  if request.method == 'POST':
    username = request.form.get('username')
    password = request.form.get('password')

    hashed_password = generate_password_hash(password)

    try:
      client = current_app.config['MONGO_CLIENT']
      db = client.twinstagram
      
      db.accounts.insert_one({
        "username": username,
        "password": hashed_password
      })

      flash ('Welcome to Twinstagram')
      return redirect('/login')
    
    except DuplicateKeyError:
            flash('Username already exists. Please choose a different one.', 'error')
            return render_template('signup/index.html')
        
    except Exception as e:
            flash(f'An error occurred: {e}', 'error')
            render_template('signup/index.html')

  return render_template('signup/index.html')