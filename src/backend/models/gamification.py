from datetime import datetime
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Badge(Base):
    __tablename__ = 'badges'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(String(500))
    icon_url = Column(String(255))
    criteria = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)

class Challenge(Base):
    __tablename__ = 'challenges'

    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    description = Column(String(500))
    reward_amount = Column(Integer)
    reward_type = Column(String(50))
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    is_active = Column(Boolean, default=True)

class UserAchievement(Base):
    __tablename__ = 'user_achievements'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    badge_id = Column(Integer, ForeignKey('badges.id'))
    challenge_id = Column(Integer, ForeignKey('challenges.id'))
    earned_at = Column(DateTime, default=datetime.utcnow)
    progress = Column(Integer, default=0)