(function () {
    const dict = {
        ko: {
            home: '홈', about: '소개', consult: '상담', contact: '연락처',
            v1_title: '쵸묘타로와 함께하는 하루의 리딩',
            v1_desc: '오늘, 당신을 위한 한 장의 메시지',
            v2_title: '쵸묘타로 타로 상담,<br>삶의 힌트를 만나는 시간',
            v2_desc: '별과 카드가 전하는 내일의 길잡이',
            v3_title: '쵸묘타로, 당신만의 이야기를<br>카드로 풀어드립니다',

            s1_title: '쵸묘타로의 카드 컬렉션',
            s1_desc: '카드마다 담긴 에너지는 모두 다릅니다。<br>쵸묘타로는 상황과 질문에 맞는 카드를 선택해、당신의 길을 더욱 선명하게 밝혀드립니다。',
        },
        ja: {
            v1_title: 'チョミョタロットとともに、1日のリーディング',
            v1_desc: '今日、あなたのための一枚のメッセージ',
            v2_title: 'チョミョタロットのリーディング、<br>人生のヒントに出会う時間',
            v2_desc: '星とカードが伝える、明日への道しるべ',
            v3_title: 'チョミョタロットが、あなただけの物語を<br>カードで紐解きます',
            s1_title: 'チョミョタロットのカードコレクション',
            s1_desc: 'カード一枚一枚が宿すエネルギーはすべて異なります。<br>チョミョタロットは状況やご質問に合うカードを選び、あなたの道筋をより鮮明に照らします。',
        }
    };

    const root = document.documentElement;
    const saved = localStorage.getItem('lang') || 'ko';

    function applyLang(lang) {
        root.setAttribute('lang', lang);
        localStorage.setItem('lang', lang);

        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            const mode = el.getAttribute('data-i18n-mode'); // 'html' | null
            const val = dict[lang] && dict[lang][key];
            if (!val) return; // 키가 없으면 건너뜀
            if (mode === 'html') el.innerHTML = val;
            else el.textContent = val;
        });

        // 스위처 버튼 상태 업데이트(이미 사용 중이면 유지)
        document.querySelectorAll('.lang-switch button').forEach(btn => {
            if (!btn.dataset.lang) return;
            btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
        });
    }

    // 초기 적용
    applyLang(saved);

    // 스위처 클릭
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-switch button');
        if (!btn) return;
        applyLang(btn.dataset.lang);
    });
})();