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
                question: "מה מסמל צליל 'נחל שוצף' בסטטוסקופ?",
                answers: [
                    "בעיה במערכת העיכול",
                    "מצב של פתיחות ונינוחות הרמונית",
                    "חסימה אנרגטית",
                    "עודף נוזלים בגוף"
                ],
                correctAnswer: 1
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
            }
            // נוסיף עוד שאלות בהמשך
        ];

        this.initializeGame();
        this.createPuzzlePieces();
    }

    createPuzzlePieces() {
        const container = document.getElementById('
    createPuzzlePieces() {
        const container = document.getElementById('puzzle-container');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(4, 1fr)';
        container.style.gap = '2px';
        
        for (let i = 0; i < this.totalPieces; i++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece hidden';
            piece.style.backgroundImage = 'url(puzzle.jpg)';
            piece.style.backgroundPosition = `${(i % 4) * -25}% ${Math.floor(i / 4) * -25}%`;
            container.appendChild(piece);
        }
    }

    getRandomQuestion() {
        const availableQuestions = this.questions.filter((_, index) => !this.usedQuestions.has(index));
        if (availableQuestions.length === 0) {
            this.usedQuestions.clear();
            return this.questions[Math.floor(Math.random() * this.questions.length)];
        }
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const questionIndex = this.questions.indexOf(availableQuestions[randomIndex]);
        this.usedQuestions.add(questionIndex);
        return this.questions[questionIndex];
    }

    displayQuestion() {
        this.currentQuestion = this.getRandomQuestion();
        document.getElementById('question').textContent = this.currentQuestion.question;
        
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = '';
        
        this.currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => this.checkAnswer(index);
            answersContainer.appendChild(button);
        });
    }

    checkAnswer(selectedIndex) {
        const feedback = document.getElementById('feedback');
        
        if (selectedIndex === this.currentQuestion.correctAnswer) {
            this.correctSound.play();
            this.score++;
            this.visiblePieces++;
            this.revealPuzzlePiece();
            
            if (this.visiblePieces === this.totalPieces) {
                this.gameWon();
            } else {
                this.displayQuestion();
            }
        } else {
            this.wrongSound.play();
            feedback.textContent = 'תשובה לא נכונה, נסה שוב!';
            setTimeout(() => {
                feedback.textContent = '';
            }, 2000);
        }
        
        document.getElementById('score-value').textContent = this.score;
    }

    revealPuzzlePiece() {
        const pieces = document.querySelectorAll('.puzzle-piece');
        if (this.visiblePieces <= pieces.length) {
            pieces[this.visiblePieces - 1].classList.remove('hidden');
        }
    }

    gameWon() {
        this.victorySound.play();
        document.getElementById('image-title').classList.remove('hidden');
        document.getElementById('question').textContent = 'כל הכבוד הצלחת!';
        document.getElementById('answers').innerHTML = '';
    }

    initializeGame() {
        this.displayQuestion();
    }
}

window.onload = () => {
    const game = new TriviaGame();
};