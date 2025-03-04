from flask import Blueprint, jsonify, request
from .models import Badge, Challenge, Achievement
from .services import GamificationService

gamification = Blueprint('gamification', __name__)
gamification_service = GamificationService()

@gamification.route('/api/badges', methods=['GET'])
def get_badges():
    user_id = request.args.get('user_id')
    badges = gamification_service.get_user_badges(user_id)
    return jsonify(badges)

@gamification.route('/api/challenges', methods=['GET'])
def get_challenges():
    user_id = request.args.get('user_id')
    challenges = gamification_service.get_user_challenges(user_id)
    return jsonify(challenges)

@gamification.route('/api/challenges/<challenge_id>/progress', methods=['POST'])
def update_challenge_progress(challenge_id):
    user_id = request.json.get('user_id')
    progress = request.json.get('progress')
    result = gamification_service.update_challenge_progress(user_id, challenge_id, progress)
    return jsonify(result)