class TriviaGame {
    constructor() {
        this.currentQuestion = null;
        this.score = 0;
        this.visiblePieces = 0;
        this.totalPieces = 16;
        this.usedQuestions = new Set();
        
        this.correctSound = document.getElementById('correct-sound');
        this.wrongSound = document.getElementById('wrong-sound');
        this.victorySound = document.getElementById('victory-sound');
        
        // מאגר השאלות
        this.questions = [
            {
                question: "מהו המאפיין הייחודי ביותר של עיסוי ביודינמי?",
                answers: [
                    "שימוש בסטטוסקופ להקשבה לבטן",
                    "שימוש בשמנים ארומטיים",
                    "עבודה על נקודות לחץ בלבד",
                    "טיפול במים חמים"
                ],
                correctAnswer: 0
            },
            {
                question: "כיצד מגיבה הבטן לעבודה בהילה?",
                answers: [
                    "אין תגובה כלל",
                    "מגיבה רק למגע ישיר",
                    "מגיבה גם לעבודה מעל העור",
                    "מגיבה רק בשכיבה"
                ],
                correctAnswer: 2
            },
            {
                question: "מה קורה כאשר יש הרבה סאונד בסטטוסקופ?",
                answers: [
                    "המערכת הסימפתטית פעילה",
                    "הפסיכו-פריסטלטיקה מאוד 'פתוחה'",
                    "יש בעיה במערכת העיכול",
                    "צריך להפסיק את הטיפול"
                ],
                correctAnswer: 1
            },
            {
                question: "מתי הפסיכו-פריסטלטיקה 'נסגרת'?",
                answers: [
                    "כשיש שקט בסטטוסקופ",
                    "כשהמטופל נרגע",
                    "בסוף הטיפול",
                    "כשיש יותר מדי צלילים"
                ],
                correctAnswer: 0
            }
        ];

        this.initializeGame();
        this.createPuzzlePieces();
    }
    // ... שאר הקוד נשאר זהה
