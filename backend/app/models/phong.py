
from app.extensions import db


class Phong(db.Model):
    __tablename__ = "Phong"

    MaPhong = db.Column(db.Integer, primary_key=True, autoincrement=True)
    TenPhong = db.Column(db.String(100), nullable=False)
    MaKTX = db.Column(db.Integer, nullable=False)
    MaLoai = db.Column(db.Integer, nullable=False)
    TrangThai = db.Column(db.Boolean, nullable=False)
