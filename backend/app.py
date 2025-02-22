from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/mydatabase'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), nullable=False)
    lastname = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    username = db.Column(db.String(128), nullable=False)
    points = db.Column(db.Integer, default=0)
    candidate_account = db.Column(db.Boolean, nullable=False)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    point_price = db.Column(db.Integer, nullable=False)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    quantity = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"), nullable=False)
    payment_complete = db.Column(db.Boolean, nullable=False)


with app.app_context():
    db.create_all()

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{"id": user.id, "name": user.name, "lastname": user.lastname,
                     "email": user.email, "username": user.username, "points":user.points,
                     "candidate":user.candidate_account} for user in users])

@app.route('/users', methods=['POST'])
def add_user():
    data = request.json
    new_user = User(name=data['name'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "Utilisateur ajouté"}), 201

if __name__ == '__main__':
    app.run()