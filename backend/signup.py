from flask import Blueprint, render_template, session, current_app, request, url_for, redirect, flash
from pymongo.errors import DuplicateKeyError
from werkzeug.security import generate_password_hash, check_password_hash


bp = Blueprint('signup', __name__, url_prefix='/signup')



@bp.route('/', methods=['GET', 'POST'])
def signup():
  if request.method == 'POST':
    username = request.form.get('username')
    password = request.form.get('password')

    print(username,password)

    hashed_password = generate_password_hash(password)
    

    return render_template('signup/index.html')
  else:

    return render_template('signup/index.html')