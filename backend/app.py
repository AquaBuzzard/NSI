from flask import Flask, request, jsonify
from sqlalchemy import select
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:my-secret-pw@localhost:44523/mydatabase'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/mydatabase'
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
    password = db.Column(db.String(128), nullable=False)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), nullable=False)
    price = db.Column(db.Float, nullable=False)
    point_price = db.Column(db.Integer, nullable=False)

class ProductQuantity(db.Model):
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"), nullable=False, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("order.id"), primary_key=True, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True)
    payment_complete = db.Column(db.Boolean, default=False)

def populate():
    db.session.add(Product(**{"name": "formule_gustavo", "price": 12.99, "point_price": 100}))
    db.session.add(Product(**{"name": "formule_salamanca", "price": 14.99, "point_price": 120}))
    db.session.add(Product(**{"name": "formule_mike", "price": 15.99, "point_price": 180}))
    db.session.add(Product(**{"name": "poulet_roti", "price": 8.99, "point_price": 60}))
    db.session.add(Product(**{"name": "poulet_epice", "price": 9.99, "point_price": 70}))
    db.session.add(Product(**{"name": "poulet_grille", "price": 11.99, "point_price": 90}))
    db.session.add(Product(**{"name": "c_cola", "price": 2.99, "point_price": 20}))
    db.session.add(Product(**{"name": "sprite", "price": 2.99, "point_price": 20}))
    db.session.add(Product(**{"name": "fanta", "price": 2.99, "point_price": 20}))
    db.session.add(Product(**{"name": "water", "price": 2.49, "point_price": 20}))
    db.session.add(Product(**{"name": "t_glace", "price": 3.49, "point_price": 20}))
    db.session.add(Product(**{"name": "horchata", "price": 3.99, "point_price": 40}))
    db.session.commit()    


with app.app_context():
    db.create_all()
    #populate()

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
        "candidate":user.candidate_account,
        "password":user.password
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

@app.route('/orders/<order_id>', methods=['GET'])
def get_order(order_id):
    query = (
        select(Order.id, Order.user_id, Order.payment_complete, ProductQuantity.quantity, Product.name, Product.price)
        .select_from(Order)
        .join(ProductQuantity, Order.id == ProductQuantity.order_id)
        .join(Product, ProductQuantity.product_id == Product.id)
        .filter(Order.id == order_id)
    )
    data = db.session.execute(query)
    names = ["order_id", "user_id", "payment_complete", "quantity", "product_name", "price"]

    result = []
    for row in data:
        result.append(dict(zip(names, row)))
    return jsonify(result)

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
    new_order = Order()
    db.session.add(new_order)
    db.session.commit()

    products = {}
    for p in Product.query.all():
        products[p.name] = p.id

    product_quantities = []
    for name, quantity in data.items():
        pq = ProductQuantity(order_id = new_order.id, product_id=products[name], quantity=quantity)
        product_quantities.append(pq)
        db.session.add(pq)
        db.session.commit()

    return jsonify({"message": "Commande ajouté", "order_id": new_order.id}), 201

if __name__ == '__main__':
    app.run()
