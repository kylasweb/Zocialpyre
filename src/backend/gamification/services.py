class LevelCalculator:
    @staticmethod
    def calculate_rank(user):
        thresholds = {
            1: 100, 2: 300, 3: 1000, 4: 3000, 5: 10000,
            6: 30000, 7: 100000, 8: 300000, 9: 1000000, 10: 3000000
        }
        
        total_points = user.points['team'] + user.points['sales']
        for level, threshold in sorted(thresholds.items(), reverse=True):
            if total_points >= threshold:
                return level
        return 0

class CommissionEngine:
    @staticmethod
    def calculate_commissions(user):
        commissions = []
        current = user
        for level in range(1, 11):
            if current.sponsor:
                commission = current.sales * (0.1 / (2 ** (level-1)))
                commissions.append({
                    'level': level,
                    'sponsor': current.sponsor.id,
                    'amount': commission
                })
                current = current.sponsor
            else:
                break
        return commissions