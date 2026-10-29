
from app.extensions import db


class SinhVien(db.Model):
    __tablename__ = "SinhVien"

    Id = db.Column(db.BigInteger, primary_key=True)
    MaSinhVien = db.Column(db.String(10), nullable=False)
    HoTen = db.Column(db.String(100), nullable=False)
    NgaySinh = db.Column(db.Date, nullable=False)
    SDT = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    Khoa = db.Column(db.Integer, nullable=False)
    Lop = db.Column(db.String(50), nullable=False)
    Nganh = db.Column(db.String(50), nullable=False)
    QuocGia = db.Column(db.String(50), nullable=False)
    Tinh = db.Column(db.String(50), nullable=False)
    Phuong = db.Column(db.String(50), nullable=False)
    SoNha = db.Column(db.String(60), nullable=False)
    SoCCCD = db.Column(db.String(12), nullable=False)
    TenCha = db.Column(db.String(100))
    SDTCha = db.Column(db.String(10))
    TenMe = db.Column(db.String(100))
    SDTMe = db.Column(db.String(10))
    GioiTinh = db.Column(db.Boolean, nullable=False)
