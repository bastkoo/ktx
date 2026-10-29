
from app.extensions import db


class NhanVien(db.Model):
    __tablename__ = "NhanVien"

    MaNhanVien = db.Column(db.Integer, primary_key=True)
    HoTen = db.Column(db.String(100), nullable=False)
    SDT = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(100))
    SoCCCD = db.Column(db.String(12), nullable=False)
    VaiTro = db.Column(db.Integer, nullable=False)
    TrangThai = db.Column(db.Boolean, nullable=False)
