
from app.extensions import db


class HoaDonDienNuoc(db.Model):
    __tablename__ = "HoaDonDienNuoc"

    MaHoaDon = db.Column(db.Integer, primary_key=True)
    MaPhong = db.Column(
        db.Integer,
        db.ForeignKey("Phong.MaPhong"),
        nullable=False
    )
    ChiSoDien = db.Column(db.Integer)
    ChiSoNuoc = db.Column(db.Numeric(12, 2))
    HinhThucThanhToan = db.Column(db.String(50))
    MaNhanVien = db.Column(
        db.Integer,
        db.ForeignKey("NhanVien.MaNhanVien"),
        nullable=False
    )
    MaCauHinhDienNuoc = db.Column(
        db.Integer,
        db.ForeignKey("CauHinhDienNuoc.ID"),
        nullable=False
    )
    Thang = db.Column(db.Integer, nullable=False)
    Nam = db.Column(db.Integer, nullable=False)
    TrangThai = db.Column(db.Boolean)
