let defaultQuestions = [
    {
        question: "Câu 1. Các di chỉ khảo cổ học ven biển cho thấy điều gì về người Việt cổ?",
        options: ["Chỉ sinh sống ở miền núi", "Có đời sống gắn liền với Biển Đông", "Không biết đánh bắt cá", "Không có giao thương"],
        answer: 1
    },
    {
        question: "Câu 2. Những dấu vết tàu đắm và hiện vật đồ gốm chứng minh điều gì?",
        options: ["Việt Nam không có giao thương", "Có hoạt động hàng hải từ sớm", "Chỉ dùng để trang trí", "Không liên quan biển đảo"],
        answer: 1
    },
    {
        question: "Câu 3. Tư liệu Việt Nam cổ chủ yếu ghi chép về nội dung nào?",
        options: ["Chỉ về văn học", "Cương vực lãnh thổ và chủ quyền", "Chỉ về tôn giáo", "Chỉ về nông nghiệp"],
        answer: 1
    },
    {
        question: "Câu 4. Bản đồ cổ Việt Nam thể hiện điều gì?",
        options: ["Không có biển", "Hoàng Sa, Trường Sa thuộc Việt Nam", "Chỉ có đất liền", "Không rõ lãnh thổ"],
        answer: 1
    },
    {
        question: "Câu 5. Văn bản hành chính thời phong kiến ghi chép điều gì?",
        options: ["Chỉ thuế khóa", "Hoạt động xác lập và bảo vệ chủ quyền", "Chỉ chiến tranh", "Không liên quan biển"],
        answer: 1
    },
    {
        question: "Câu 6. Từ thế kỉ XVI, nước nào đã vẽ bản đồ Biển Đông?",
        options: ["Nhật Bản", "Mỹ", "Bồ Đào Nha, Hà Lan, Pháp, Anh", "Nga"],
        answer: 2
    },
    {
        question: "Câu 7. Tư liệu nước ngoài cho thấy điều gì?",
        options: ["Việt Nam không có biển", "Việt Nam có hoạt động thực thi chủ quyền", "Biển Đông thuộc nước khác", "Không có người sinh sống"],
        answer: 1
    },
    {
        question: "Câu 8. Chúa Nguyễn thường làm gì ở Biển Đông?",
        options: ["Xây nhà", "Cử thuyền khai thác hải sản", "Đóng cửa biển", "Không quan tâm"],
        answer: 1
    },
    {
        question: "Câu 9. Sau năm 1884, Pháp đã làm gì tại các đảo?",
        options: ["Bỏ hoang", "Xây bia chủ quyền, trạm khí tượng", "Bán đảo", "Không quản lí"],
        answer: 1
    },
    {
        question: "Câu 10. Sau Hiệp định Giơ-ne-vơ 1954, Việt Nam đã làm gì?",
        options: ["Từ bỏ biển đảo", "Ban hành các sắc lệnh quản lí", "Giao cho nước khác", "Không quan tâm"],
        answer: 1
    },
    {
        question: "Câu 11. Sau thống nhất đất nước, Việt Nam tiếp tục làm gì?",
        options: ["Bỏ quản lí biển", "Quản lí và bảo vệ chủ quyền", "Chỉ khai thác dầu", "Không có hoạt động"],
        answer: 1
    },
    {
        question: "Câu 12. Chứng cứ lịch sử bao gồm những gì?",
        options: ["Chỉ truyền miệng", "Khảo cổ, tư liệu trong nước và nước ngoài", "Chỉ bản đồ", "Chỉ sách giáo khoa"],
        answer: 1
    },
    {
        question: "Câu 13. Công ước Liên hợp quốc về Luật Biển được thông qua năm nào?",
        options: ["1975", "1982", "1990", "2000"],
        answer: 1
    },
    {
        question: "Câu 14. UNCLOS là viết tắt của gì?",
        options: ["Luật đất đai", "Công ước Liên hợp quốc về Luật Biển", "Hiệp định thương mại", "Tổ chức hàng hải"],
        answer: 1
    },
    {
        question: "Câu 15. Việt Nam tham gia UNCLOS với vai trò gì?",
        options: ["Không tham gia", "Thành viên có trách nhiệm", "Quan sát viên", "Bị ép buộc"],
        answer: 1
    },
    {
        question: "Câu 16. Luật Biển Việt Nam được thông qua năm nào?",
        options: ["2000", "2005", "2012", "2015"],
        answer: 2
    },
    {
        question: "Câu 17. Luật Biển Việt Nam 2012 cụ thể hóa điều gì?",
        options: ["Văn học", "Quy định của UNCLOS", "Luật giáo dục", "Luật giao thông"],
        answer: 1
    },
    {
        question: "Câu 18. Văn bản pháp luật trong nước về biển KHÔNG bao gồm:",
        options: ["Luật Biên giới quốc gia", "Luật Dầu khí", "Luật Cảnh sát biển", "Luật Hôn nhân"],
        answer: 3
    },
    {
        question: "Câu 19. Cơ sở pháp lí chủ yếu dựa vào đâu?",
        options: ["Truyền miệng", "Văn bản luật quốc tế và trong nước", "Ý kiến cá nhân", "Phong tục"],
        answer: 1
    },
    {
        question: "Câu 20. Ý nghĩa của chứng cứ lịch sử và pháp lí là gì?",
        options: ["Trang trí tài liệu", "Khẳng định chủ quyền biển đảo", "Không có giá trị", "Chỉ dùng nghiên cứu"],
        answer: 1
    },
    {
        question: "Câu 21. Biển đảo Việt Nam có vai trò gì trong quốc phòng?",
        options: ["Chỉ phục vụ du lịch", "Là tuyến phòng thủ của đất nước", "Không có vai trò", "Chỉ dùng để khai thác cá"],
        answer: 1
    },
    {
        question: "Câu 22. Biển đảo giúp bảo vệ điều gì?",
        options: ["Chỉ vùng núi", "Toàn vẹn lãnh thổ đất nước", "Chỉ đồng bằng", "Không liên quan lãnh thổ"],
        answer: 1
    },
    {
        question: "Câu 23. Một nhiệm vụ quan trọng trên biển là gì?",
        options: ["Xây dựng nhà cao tầng", "Cứu hộ, cứu nạn", "Trồng lúa", "Khai thác than"],
        answer: 1
    },
    {
        question: "Câu 24. Biển đảo giúp kiểm soát khu vực nào?",
        options: ["Chỉ đất liền", "Vùng biển và vùng trời trên biển", "Chỉ vùng núi", "Không kiểm soát gì"],
        answer: 1
    },
    {
        question: "Câu 25. Tài nguyên biển Việt Nam có đặc điểm gì?",
        options: ["Nghèo nàn", "Phong phú và đa dạng", "Không có tài nguyên", "Chỉ có nước"],
        answer: 1
    },
    {
        question: "Câu 26. Các đảo, quần đảo có vị trí như thế nào?",
        options: ["Không quan trọng", "Án ngữ các tuyến giao thông biển", "Xa giao thông", "Không có người qua lại"],
        answer: 1
    },
    {
        question: "Câu 27. Biển đảo góp phần phát triển lĩnh vực nào?",
        options: ["Chỉ nông nghiệp", "Kinh tế biển", "Chỉ công nghiệp nặng", "Không phát triển kinh tế"],
        answer: 1
    },
    {
        question: "Câu 28. Vai trò của biển đảo đối với kinh tế là gì?",
        options: ["Không ảnh hưởng", "Là động lực tăng trưởng", "Là gánh nặng", "Chỉ phục vụ quân sự"],
        answer: 1
    },
    {
        question: "Câu 29. Biển đảo giúp khẳng định điều gì?",
        options: ["Văn hóa", "Chủ quyền và lợi ích quốc gia", "Thời tiết", "Dân số"],
        answer: 1
    },
    {
        question: "Câu 30. Vai trò chiến lược của biển đảo thể hiện ở mấy mặt chính?",
        options: ["1", "2", "3", "4"],
        answer: 1
    }
];

const moneyLadder = [
    "200.000", "400.000", "600.000", "1.000.000", "2.000.000",
    "3.000.000", "6.000.000", "10.000.000", "14.000.000", "22.000.000",
    "30.000.000", "40.000.000", "60.000.000", "85.000.000", "150.000.000"
];

let questions = [...defaultQuestions];
let currentQuestionIndex = 0;
let score = 0;
let usedLifelines = {
    fiftyFifty: false,
    phone: false,
    audience: false
};

// Elements
const startScreen = document.getElementById('start-screen');
const themeToggle = document.getElementById('theme-toggle');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const questionText = document.getElementById('question-text');
const options = document.querySelectorAll('.option');
const moneyDisplay = document.getElementById('money-display');
const statusMsg = document.getElementById('status-msg');
const moneyLadderDiv = document.getElementById('money-ladder');

// Theme Logic
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '🌙' : '🌓';
});

// Initialize Money Ladder UI
function initMoneyLadder() {
    moneyLadderDiv.innerHTML = '';
    const redMilestones = [0, 4, 9, 14]; // 200k, 2M, 22M, 150M indices
    
    moneyLadder.forEach((amount, index) => {
        const item = document.createElement('div');
        item.className = 'ladder-item';
        
        if (redMilestones.includes(index)) {
            item.classList.add('red-milestone');
        } else {
            item.classList.add('yellow-milestone');
        }
        
        if ((index + 1) % 5 === 0) item.classList.add('milestone');
        item.innerHTML = `<span>${index + 1}</span> <span>${amount}</span>`;
        item.id = `ladder-${index}`;
        moneyLadderDiv.appendChild(item);
    });
}

// Start Game
document.getElementById('start-btn').addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    usedLifelines = { fiftyFifty: false, phone: false, audience: false };
    
    // Prepare and shuffle questions with rules
    prepareQuestions();
    
    resetLifelinesUI();
    loadQuestion();
    initMoneyLadder();
    updateLadderUI();
    moneyLadderDiv.classList.add('show');
});

function prepareQuestions() {
    // 1. Shuffle all questions first
    let shuffled = [...defaultQuestions].map(q => {
        // Shuffle options for EACH question
        let optionsWithIndex = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        let shuffledOpts = optionsWithIndex.sort(() => Math.random() - 0.5);
        
        return {
            question: q.question,
            options: shuffledOpts.map(o => o.text),
            answer: shuffledOpts.findIndex(o => o.originalIndex === q.answer)
        };
    }).sort(() => Math.random() - 0.5);
    
    // 2. Apply rule: No more than 2 consecutive questions with same answer position
    let finalQuestions = [];
    let consecutiveCount = 1;
    let lastAnswer = -1;

    for (let i = 0; i < shuffled.length; i++) {
        let currentQ = shuffled[i];
        
        if (currentQ.answer === lastAnswer) {
            consecutiveCount++;
        } else {
            consecutiveCount = 1;
        }

        if (consecutiveCount > 2) {
            // Find another question further down with a different answer position
            let swapIndex = shuffled.findIndex((q, idx) => idx > i && q.answer !== lastAnswer);
            
            if (swapIndex !== -1) {
                // Swap questions
                [shuffled[i], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[i]];
                currentQ = shuffled[i];
                consecutiveCount = 1;
            }
        }
        
        finalQuestions.push(currentQ);
        lastAnswer = currentQ.answer;
    }
    
    questions = finalQuestions.slice(0, 15); // Take only 15 for a full game
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.question;
    
    // Reset animations and classes for NEW question
    questionText.classList.remove('animate__fadeIn');
    void questionText.offsetWidth; // Trigger reflow
    questionText.classList.add('animate__fadeIn');

    options.forEach((btn, index) => {
        btn.querySelector('p').textContent = q.options[index];
        // CRITICAL: Remove correct/wrong classes and reset visibility
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
        btn.style.visibility = 'visible';
    });
}

options.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const selected = parseInt(btn.dataset.answer);
        checkAnswer(selected, btn);
    });
});

function checkAnswer(selected, btn) {
    const correct = questions[currentQuestionIndex].answer;
    
    // Disable all options
    options.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        score = moneyLadder[currentQuestionIndex];
        moneyDisplay.textContent = score + " VNĐ";
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length && currentQuestionIndex < 15) {
                updateLadderUI();
                loadQuestion();
            } else {
                endGame(true);
            }
        }, 1500);
    } else {
        btn.classList.add('wrong');
        options[correct].classList.add('correct');
        setTimeout(() => endGame(false), 1500);
    }
}

function updateLadderUI() {
    document.querySelectorAll('.ladder-item').forEach(item => item.classList.remove('active'));
    const current = document.getElementById(`ladder-${currentQuestionIndex}`);
    if (current) current.classList.add('active');
}

function endGame(won) {
    gameScreen.classList.add('hidden');
    moneyLadderDiv.classList.remove('show');
    endScreen.classList.remove('hidden');
    document.getElementById('end-title').textContent = won ? "CHÚC MỪNG!" : "RẤT TIẾC!";
    document.getElementById('final-score').textContent = `Bạn đã giành được: ${score} VNĐ`;
}

document.getElementById('restart-btn').addEventListener('click', () => {
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});

// Lifelines
document.getElementById('help-5050').addEventListener('click', () => {
    if (usedLifelines.fiftyFifty) return;
    usedLifelines.fiftyFifty = true;
    document.getElementById('help-5050').classList.add('used');
    
    const correct = questions[currentQuestionIndex].answer;
    const indices = [0, 1, 2, 3].filter(i => i !== correct);
    
    // Shuffle indices to remove random 2 wrong answers
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    options[indices[0]].style.visibility = 'hidden';
    options[indices[1]].style.visibility = 'hidden';
});

document.getElementById('help-phone').addEventListener('click', () => {
    if (usedLifelines.phone) return;
    usedLifelines.phone = true;
    document.getElementById('help-phone').classList.add('used');
    
    const correct = questions[currentQuestionIndex].answer;
    const answers = ["A", "B", "C", "D"];
    // 80% chance of correct answer
    const isCorrect = Math.random() < 0.8;
    const advice = isCorrect ? answers[correct] : answers[Math.floor(Math.random() * 4)];
    
    showModal(`Người thân của bạn nói: "Tôi nghĩ đáp án đúng là ${advice}"`);
});

document.getElementById('help-audience').addEventListener('click', () => {
    if (usedLifelines.audience) return;
    usedLifelines.audience = true;
    document.getElementById('help-audience').classList.add('used');
    
    const correct = questions[currentQuestionIndex].answer;
    let votes = [0, 0, 0, 0];
    votes[correct] = 40 + Math.floor(Math.random() * 40); // 40-80% for correct
    
    let remaining = 100 - votes[correct];
    for(let i=0; i<3; i++) {
        const v = Math.floor(Math.random() * remaining);
        // Find next empty slot
        let idx = votes.findIndex((val, index) => index !== correct && val === 0);
        if (idx !== -1) {
            votes[idx] = v;
            remaining -= v;
        }
    }
    // Last slot
    let lastIdx = votes.findIndex((val, index) => index !== correct && val === 0);
    if (lastIdx !== -1) votes[lastIdx] = remaining;

    showModal(`Ý kiến khán giả:<br>A: ${votes[0]}% | B: ${votes[1]}% | C: ${votes[2]}% | D: ${votes[3]}%`);
});

function resetLifelinesUI() {
    document.querySelectorAll('.help-btn').forEach(btn => btn.classList.remove('used'));
}

// Modal Logic
const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

function showModal(content) {
    document.getElementById('modal-body').innerHTML = content;
    modal.classList.remove('hidden');
}

span.onclick = function() {
    modal.classList.add('hidden');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
}
