
from app.extensions import db


class LoaiPhong(db.Model):
    __tablename__ = "LoaiPhong"

    MaLoai = db.Column(db.Integer, primary_key=True, autoincrement=True)
    TenLoaiPhong = db.Column(db.String(50), nullable=False)
    Gia = db.Column(db.BigInteger, nullable=False)
    SoLuongToiDa = db.Column(db.Integer, nullable=False)
