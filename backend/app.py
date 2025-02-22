from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:my-secret-pw@localhost:44523/mydatabase'
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
    return jsonify([{
        "id": user.id,
        "name": user.name,
        "lastname": user.lastname,
        "email": user.email,
        "username": user.username,
        "points":user.points,
        "candidate":user.candidate_account
    } for user in users])

@app.route('/product', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "point_price": product.point_price,
    } for product in products])

@app.route('/orders', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return jsonify([{
        "id": order.id,
        "quantity": order.quantity,
        "user_id": order.user_id,
        "product_id": order.product_id,
        "payment_complete": order.payment_complete,
    } for order in orders])

@app.route('/users', methods=['POST'])
def add_user():
    data = request.json
    new_user = User(**data)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "Utilisateur ajouté"}), 201

@app.route('/products', methods=['POST'])
def add_product():
    data = request.json
    new_product = Product(**data)
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Produit ajouté"}), 201

@app.route('/orders', methods=['POST'])
def add_order():
    data = request.json
    new_order = Order(**data)
    db.session.add(new_order)
    db.session.commit()
    return jsonify({"message": "Commande ajouté"}), 201

if __name__ == '__main__':
    app.run()
