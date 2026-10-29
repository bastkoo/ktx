
from app.extensions import db


class ThongBao(db.Model):
    __tablename__ = "ThongBao"

    MaThongBao = db.Column(db.Integer, primary_key=True)
    NoiDung = db.Column(db.Text, nullable=False)
    NgayDang = db.Column(
        db.DateTime,
        nullable=False,
        server_default=db.func.current_timestamp()
    )
    MaNhanVien = db.Column(
        db.Integer,
        db.ForeignKey("NhanVien.MaNhanVien"),
        nullable=False
    )
