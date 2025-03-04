from sqlalchemy.orm import Session
from datetime import datetime
from ..models.gamification import Badge, Challenge, UserAchievement
from ..schemas.gamification import BadgeCreate, ChallengeCreate

class GamificationService:
    def __init__(self, db: Session):
        self.db = db

    def get_user_badges(self, user_id: int):
        achievements = self.db.query(UserAchievement).filter(
            UserAchievement.user_id == user_id
        ).all()
        return [self._format_achievement(achievement) for achievement in achievements]

    def get_active_challenges(self):
        now = datetime.utcnow()
        return self.db.query(Challenge).filter(
            Challenge.is_active == True,
            Challenge.start_date <= now,
            Challenge.end_date >= now
        ).all()

    def update_challenge_progress(self, user_id: int, challenge_id: int, progress: int):
        achievement = self.db.query(UserAchievement).filter(
            UserAchievement.user_id == user_id,
            UserAchievement.challenge_id == challenge_id
        ).first()

        if not achievement:
            achievement = UserAchievement(
                user_id=user_id,
                challenge_id=challenge_id,
                progress=0
            )
            self.db.add(achievement)

        achievement.progress = progress
        if progress >= 100:
            self._award_challenge_completion(user_id, challenge_id)

        self.db.commit()
        return self._format_achievement(achievement)

    def _award_challenge_completion(self, user_id: int, challenge_id: int):
        challenge = self.db.query(Challenge).get(challenge_id)
        # Add reward logic here