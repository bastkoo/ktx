
from app.extensions import db


class HoaDonPhong(db.Model):
    __tablename__ = "HoaDonPhong"

    MaHoaDon = db.Column(db.Integer, primary_key=True)
    MaNhanVien = db.Column(
        db.Integer,
        db.ForeignKey("NhanVien.MaNhanVien")
    )
    HinhThucThanhToan = db.Column(db.String(255))
    MaHopDong = db.Column(
        db.Integer,
        db.ForeignKey("HopDong.MaHopDong"),
        nullable=False
    )
    Thang = db.Column(db.Integer, nullable=False)
    Nam = db.Column(db.Integer, nullable=False)
    TrangThai = db.Column(db.Boolean)
