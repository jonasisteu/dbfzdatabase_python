from typing import Optional

from models import Base
from sqlalchemy.orm import Mapped, mapped_column


class Character(Base):
    __tablename__ = "characters"

    id: Mapped[int] = mapped_column(primary_key=True)
    reference: Mapped[str]
    name: Mapped[str]
    season: Mapped[str]
    origin_series: Mapped[str]
    archetype: Mapped[str]
    splash_art_url: Mapped[Optional[str]]
    thumbnail: Mapped[Optional[str]]

    def __repr__(self):
        return (f"Character("
                f"id={self.id!r}," 
                f"reference{self.reference!r},"
                f"name={self.name!r},"
                f"season={self.season!r},"
                f"origin_series={self.origin_series!r},"
                f"archetype={self.archetype!r},"
                f"splash_art_url={self.splash_art_url!r},"
                f"thumbnail={self.thumbnail!r})"
        )