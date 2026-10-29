
from app.extensions import db


class CauHinhDienNuoc(db.Model):
    __tablename__ = "CauHinhDienNuoc"

    ID = db.Column(db.Integer, primary_key=True)
    GiaDien = db.Column(db.BigInteger, nullable=False)
    GiaNuoc = db.Column(db.BigInteger, nullable=False)
