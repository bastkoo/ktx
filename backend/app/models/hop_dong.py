
from app.extensions import db


class HopDong(db.Model):
    __tablename__ = "HopDong"

    MaHopDong = db.Column(db.Integer, primary_key=True)
    IdSinhVien = db.Column(
        db.BigInteger,
        db.ForeignKey("SinhVien.Id"),
        nullable=False
    )
    TrangThaiTienCoc = db.Column(db.Boolean, nullable=False)
    MaPhong = db.Column(
        db.Integer,
        db.ForeignKey("Phong.MaPhong"),
        nullable=False
    )
    NgayLap = db.Column(db.DateTime, nullable=False)
    MaNhanVien = db.Column(
        db.Integer,
        db.ForeignKey("NhanVien.MaNhanVien")
    )
    TrangThaiHopDong = db.Column(db.Boolean)
