
from app.extensions import db


class PhieuDangKy(db.Model):
    __tablename__ = "PhieuDangKy"

    MaPhieu = db.Column(db.Integer, primary_key=True, autoincrement=True)
    IdSinhVien = db.Column(db.Integer, nullable=False)
    TrangThai = db.Column(db.Integer, nullable=False)
    MaNhanVien = db.Column(db.Integer)
    NgayLap = db.Column(db.DateTime, nullable=False)
    MaDotDangKy = db.Column(db.Integer, nullable=False)
    AnhDaiDien = db.Column(db.String)
