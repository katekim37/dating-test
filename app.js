const questions = [
    {
        q: '밤 11시, 썸남/썸녀가 "뭐해?"라고 보냈을 때 나의 반응은?',
        a: [
            { text: '바로 답장한다 ("나 이제 누웠어~")', score: 0 },
            { text: '다음 날 아침에 답장한다 ("어제 일찍 잠들었네ㅠㅠ")', score: 2 },
            { text: '읽고 씹는다', score: 5 }
        ]
    },
    {
        q: '연인의 폰 비밀번호, 공유해야 할까?',
        a: [
            { text: '당연히 공유해야지! 숨길 게 없잖아.', score: 5 },
            { text: '굳이? 개인 사생활은 존중해야지.', score: 0 },
            { text: '몰래 한 번쯤은 보고 싶다...', score: 3 }
        ]
    },
    {
        q: '데이트 중 우연히 전 애인과 마주쳤다. 나의 행동은?',
        a: [
            { text: '모른 척 지나간다.', score: 1 },
            { text: '가볍게 눈인사만 한다.', score: 0 },
            { text: '현 애인의 손을 더 꽉 잡는다.', score: 5 }
        ]
    },
    {
        q: "SNS에 '럽스타그램'을 올리는 것에 대한 생각은?",
        a: [
            { text: '무조건 올린다! 동네방네 자랑해야지.', score: 3 },
            { text: '친한 친구들만 볼 수 있게 올린다.', score: 1 },
            { text: '절대 안 올린다. 조용히 만나는 게 최고.', score: 0 }
        ]
    },
    {
        q: '연인이 이성 친구와 단둘이 1박 2일 여행을 간다고 한다면?',
        a: [
            { text: '절대 불가! 당장 헤어져!', score: 5 },
            { text: '누구랑 가는지, 일정 다 보고하면 오케이.', score: 2 },
            { text: '그래 재밌게 잘 다녀와~', score: 0 }
        ]
    },
    {
        q: '연락 문제로 심하게 다퉜을 때 나의 대처법은?',
        a: [
            { text: '그 자리에서 끝까지 대화로 푼다.', score: 4 },
            { text: '일단 화가 나니 잠수 탄다.', score: 1 },
            { text: '논리적으로 상대방의 잘못을 조목조목 따진다.', score: 3 }
        ]
    },
    {
        q: '내가 생각하는 이상적인 연애의 끝은?',
        a: [
            { text: '결혼해서 평생 함께하는 것.', score: 0 },
            { text: '지금 이 순간 행복하면 그걸로 만족.', score: 2 },
            { text: '연애는 연애일 뿐, 굳이 끝을 생각 안 함.', score: 4 }
        ]
    }
];

const results = [
    {
        min: 0,
        max: 8,
        title: '데이터가 증명하는\n순애보',
        desc: '당신은 헌신적이고 안정적인 연애를 추구하는 순애보 타입입니다.\n\n사랑하는 사람에게 최선을 다하며 신뢰를 가장 중요하게 생각합니다. 밀당보다는 진정성 있는 태도로 상대방을 대합니다.\n\n가끔은 상대방을 너무 배려하느라 자신의 감정을 억누를 수도 있으니, 본인의 마음도 잘 챙겨주세요!'
    },
    {
        min: 9,
        max: 16,
        title: '적당히 쿨한\n현실주의자',
        desc: '자신의 삶과 연애의 밸런스를 기가 막히게 잘 맞추는 현실주의자입니다.\n\n감정에 지나치게 휘둘리지 않으며, 서로의 사생활과 개인 시간을 존중하는 성숙한 연애를 선호합니다.\n\n다만 너무 쿨한 태도가 상대방에게는 무관심으로 보일 수 있으니, 가끔은 확실한 애정 표현을 해주는 것이 좋습니다.'
    },
    {
        min: 17,
        max: 23,
        title: '밀당의 고수\n여우 / 늑대',
        desc: '연애의 주도권을 쥐고 흔드는 치명적인 매력의 소유자입니다.\n\n상대방의 심리를 꿰뚫어 보고 적절한 타이밍에 당근과 채찍을 줄 아는 고단수입니다. 당신과 연애하면 절대 지루할 틈이 없습니다.\n\n하지만 너무 계산적인 태도는 진실된 관계 형성에 독이 될 수 있으니 때로는 무장해제된 모습을 보여주세요.'
    },
    {
        min: 24,
        max: 35,
        title: '리플리 증후군\n주의 구간 🚨',
        desc: '사랑이라는 이름으로 집착과 광기가 서려 있는 매운맛 연애 타입입니다.\n\n상대방의 모든 것을 알고 싶고, 내 통제 하에 두려는 성향이 강합니다. 사랑의 크기가 큰 만큼 상처받는 것도 두려워합니다.\n\n의심과 구속은 오히려 상대를 멀어지게 만듭니다. 상대방을 믿고 조금은 마음의 여유를 가져보는 것은 어떨까요?'
    }
];

// State
let currentQuestionIndex = 0;
let totalScore = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const progressFill = document.getElementById('progress-fill');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('retry-btn').addEventListener('click', resetQuiz);
document.getElementById('share-btn').addEventListener('click', shareResult);

function showScreen(screenElement) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screenElement.classList.add('active');
}

function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    showScreen(quizScreen);
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    questionNumber.textContent = `Q.${currentQuestionIndex + 1}`;
    questionText.textContent = q.q;
    
    // Update progress
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Clear options
    optionsContainer.innerHTML = '';

    // Render options
    q.a.forEach((option) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.addEventListener('click', () => handleOptionSelect(option.score));
        optionsContainer.appendChild(btn);
    });
}

function handleOptionSelect(score) {
    totalScore += score;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        progressFill.style.width = '100%';
        showLoading();
    }
}

function showLoading() {
    showScreen(loadingScreen);
    setTimeout(() => {
        showResult();
    }, 2000); // 2초 로딩 시뮬레이션
}

function showResult() {
    let finalResult = results[0];
    for (let r of results) {
        if (totalScore >= r.min && totalScore <= r.max) {
            finalResult = r;
            break;
        }
    }

    document.getElementById('result-title').textContent = finalResult.title;
    document.getElementById('result-desc').textContent = finalResult.desc;
    
    showScreen(resultScreen);
}

function resetQuiz() {
    showScreen(startScreen);
}

function shareResult() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('테스트 링크가 복사되었습니다! 친구들에게 공유해보세요.');
    }).catch(() => {
        alert('링크 복사에 실패했습니다.');
    });
}
