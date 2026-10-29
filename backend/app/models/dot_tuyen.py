
from app.extensions import db


class DotTuyen(db.Model):
    __tablename__ = "dottuyen"

    madottuyen = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )
    namhoc = db.Column(db.String(50))
    trangthai = db.Column(db.Boolean)
