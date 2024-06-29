from flask import Blueprint, render_template, session, current_app, request, url_for, redirect

bp = Blueprint('login', __name__, url_prefix='/login')



@bp.route('/', methods=['GET','POST'])
def login():
    client = current_app.config['MONGO_CLIENT']
    db = client.twinstagram
    accounts = list(db.accounts.find())

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        print(username, password)

    
    return render_template('login/index.html')