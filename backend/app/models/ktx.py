
from app.extensions import db


class KTX(db.Model):
    __tablename__ = "KTX"

    MaKTX = db.Column(db.Integer, primary_key=True, autoincrement=True)
    TenKTX = db.Column(db.String(255), nullable=False)
