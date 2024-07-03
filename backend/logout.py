from flask import Blueprint, redirect, session

bp = Blueprint('logout', __name__, url_prefix='/logout')

@bp.route('/')
def logout():
    session.abandon
    
    return redirect('/login')
