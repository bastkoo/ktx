
from app.extensions import db


class PhieuDangKy(db.Model):
    __tablename__ = "PhieuDangKy"

    MaPhieu = db.Column(db.Integer, primary_key=True)
    IdSinhVien = db.Column(
        db.Integer,
        db.ForeignKey("SinhVien.Id"),
        nullable=False
    )
    TrangThai = db.Column(db.Integer, nullable=False)
    MaNhanVien = db.Column(
        db.Integer,
        db.ForeignKey("NhanVien.MaNhanVien")
    )
    NgayLap = db.Column(db.DateTime, nullable=False)
    MaDotDangKy = db.Column(
        db.Integer,
        db.ForeignKey("dottuyen.madottuyen"),
        nullable=False
    )
    MaLoaiPhong = db.Column(
        db.Integer,
        db.ForeignKey("LoaiPhong.MaLoai", name="fk_PhieuDangKy_LoaiPhong"),
    nullable=True
)

    loai_phong = db.relationship(
        "LoaiPhong",
        back_populates="phieu_dang_kys"
    )
