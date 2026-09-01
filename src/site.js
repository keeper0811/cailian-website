'use strict';

var languageCodes = ['zh', 'en', 'vi'];
var pageKeys = ['home', 'services', 'portfolio', 'about', 'booking'];
var pageSlugs = { home: '', services: 'services', portfolio: 'portfolio', about: 'about', booking: 'booking' };
var lineUrl = 'https://line.me/R/ti/p/@cailian-demo';

var content = {
  zh: {
    htmlLocale: 'zh-Hant', languageName: '中文', shortLanguage: '中文',
    demo: '目前為 MVP 示意內容，品牌資料、價格與圖片將於正式上線前替換。',
    brand: '采蓮紋繡', brandSub: 'Permanent Makeup Atelier',
    nav: { home: '首頁', services: '服務與價格', portfolio: '作品案例', about: '關於我們', booking: '立即預約' },
    actions: { line: 'LINE 立即預約', work: '查看作品', details: '了解服務', allServices: '查看完整服務', allCases: '瀏覽更多案例', close: '關閉', menu: '開啟選單', map: '前往 Google Maps' },
    meta: {
      home: ['采蓮紋繡｜自然輪廓，精準設計', '三語紋繡服務示意網站，展示霧眉、眼線、霧唇作品與 LINE 預約方式。'],
      services: ['服務與價格｜采蓮紋繡', '查看紋繡服務、示意價格、流程、恢復期與常見問題。'],
      portfolio: ['作品案例｜采蓮紋繡', '瀏覽霧眉、眼線與霧唇 Before／After 示意案例。'],
      about: ['關於我們｜采蓮紋繡', '了解示意紋繡師背景、設計理念、衛生流程與工作室環境。'],
      booking: ['LINE 立即預約｜采蓮紋繡', '透過 LINE 加入店家好友，查看示意地址、營業時間與預約規則。']
    },
    home: {
      eyebrow: '精準設計・自然輪廓・安心溝通', title: '保留你的樣子，<em>精緻每一道輪廓。</em>',
      lead: '從眉型、眼神到唇色，以細緻評估與客製設計，完成自然、耐看的日常妝感。',
      featureTitles: ['客製設計', '細緻技術', '安心體驗'],
      featureBodies: ['依臉型與原生條件規劃，不套用制式眉型。', '以柔和線條與自然色階，保留個人特色。', '清楚說明流程、恢復期與術後照護。'],
      servicesTitle: '選擇適合你的服務', resultsTitle: '真實變化，自然呈現',
      trustTitle: '一間讓你安心提問的工作室', trustBody: '示意內容：一對一溝通、單次耗材、清楚流程，讓每個決定都建立在理解與信任上。',
      proof: ['專業示意資歷', '嚴選示意色乳', '衛生流程示意', '一對一溝通'],
      reviewsTitle: '顧客怎麼說',
      reviews: ['「眉型很自然，朋友只覺得整個人更有精神。」', '「說明很清楚，從設計到照護都讓人很放心。」', '「可以用熟悉的語言溝通，確認細節更安心。」']
    },
    services: {
      eyebrow: '服務與價格', title: '先理解，再選擇適合你的改變。', lead: '以下價格、時間與效果皆為 MVP 示意資料，正式內容將由店家確認。',
      labels: { from: '示意價格', time: '施作時間', lasting: '維持時間', retouch: '補色', suitable: '適合對象', recovery: '恢復期' },
      items: [
        { key: 'brow', name: '柔霧眉', price: 'NT$ 8,800 起', time: '約 2.5 小時', lasting: '約 12–24 個月', retouch: '含一次示意補色', suitable: '眉毛稀疏、想改善眉型或減少每日畫眉時間', recovery: '約 7–14 天', desc: '以柔和霧感補足眉型，保留原生毛流與自然漸層。' },
        { key: 'eye', name: '隱形眼線', price: 'NT$ 6,800 起', time: '約 2 小時', lasting: '約 18–30 個月', retouch: '依示意方案', suitable: '希望眼神更有精神、妝感保持細緻自然', recovery: '約 5–10 天', desc: '沿睫毛根部細緻填補，讓眼神乾淨有精神。' },
        { key: 'lip', name: '自然霧唇', price: 'NT$ 10,800 起', time: '約 3 小時', lasting: '約 18–30 個月', retouch: '含一次示意補色', suitable: '唇色不均、暗沉或希望提升氣色', recovery: '約 7–14 天', desc: '依膚色客製調色，改善唇色不均並保留自然質感。' }
      ],
      processTitle: '服務流程', process: [['01', '需求溝通', '了解期待、生活習慣與原生條件。'], ['02', '輪廓定位', '確認比例、線條與左右平衡。'], ['03', '正式施作', '依確認設計與色彩細緻完成。'], ['04', '術後照護', '提供恢復期與日常照護說明。']],
      cautionTitle: '施作前請先確認', caution: '孕期、哺乳期、特殊體質、正在服藥或有皮膚狀況者，應先諮詢合格醫療專業人員。本網站不提供醫療診斷。',
      faqTitle: '常見問題', faq: [
        ['施作過程會不會痛？', '感受因人而異，正式服務會在施作前說明流程與舒適度安排。'],
        ['多久可以碰水或化妝？', '恢復期依服務與個人狀況不同，會提供對應照護說明；此處為示意內容。'],
        ['是否一定需要補色？', '會依留色情況、膚質與期待評估，並非每個人都完全相同。'],
        ['效果可以維持多久？', '會受到膚質、生活習慣、代謝與照護方式影響，請以實際評估為準。'],
        ['舊眉或舊唇色能直接修改嗎？', '需要先看殘色、顏色與形狀，再判斷能否直接調整或需先淡化。'],
        ['預約後如何改期或取消？', '請透過 LINE 提前聯絡；正式期限與訂金規則將由店家補充。']
      ]
    },
    portfolio: {
      eyebrow: '作品案例', title: '看見細節，也看見每個人的不同。', lead: '所有圖片均為版面示意素材，正式網站只會使用已取得公開同意的真實案例。',
      filters: { all: '全部', brow: '眉毛', eye: '眼線', lip: '霧唇' },
      cases: [
        ['brow', '柔霧眉示意 01', '改善眉尾稀疏，保留原生眉頭。', 'brow-before.svg', 'brow-after.svg'],
        ['brow', '柔霧眉示意 02', '調整眉峰與左右視覺平衡。', 'brow-before.svg', 'brow-after.svg'],
        ['eye', '隱形眼線示意 01', '沿睫毛根部增加眼神清晰度。', 'eye.svg', 'eye.svg'],
        ['lip', '自然霧唇示意 01', '以柔和莓色調整唇色不均。', 'lip.svg', 'lip.svg'],
        ['brow', '眉型設計示意 03', '依臉型保留自然弧度。', 'brow-before.svg', 'brow-after.svg'],
        ['lip', '自然霧唇示意 02', '降低暗沉並維持透明感。', 'lip.svg', 'lip.svg']
      ], before: 'Before', after: 'After', demoLabel: '示意案例'
    },
    about: {
      eyebrow: '關於我們', title: '技術需要被看見，信任需要被說清楚。', lead: '以下人物、經歷與工作室資料皆為 MVP 示意內容，正式上線前將全面替換。',
      artistTitle: '示意紋繡師｜林采蓮', artistBody: '相信好的紋繡不是改變一張臉，而是整理原本就存在的輪廓。每次服務從聆聽、觀察到定位，讓顧客理解並參與每個決定。',
      credentials: ['專業紋繡課程示意結業', '眉型與色彩設計示意研修', '衛生安全流程示意訓練'],
      hygieneTitle: '衛生與安全原則', hygiene: ['接觸性耗材單次使用', '操作區域依流程清潔', '器材與色乳來源清楚標示', '施作前確認身體狀況與注意事項'],
      studioTitle: '安靜、明亮的一對一空間', studioBody: '工作室照片與地址目前為示意。正式網站會呈現入口、諮詢區與操作環境，讓第一次來訪也能安心找到我們。'
    },
    booking: {
      eyebrow: '立即預約', title: '從一句問題開始，也可以。', lead: 'MVP 不在網站收集資料。請加入 LINE 好友，由店家人工回覆服務、時段與注意事項。',
      lineTitle: '加入 LINE 官方帳號', lineBody: '手機點擊會開啟 LINE；電腦點擊會顯示 QR Code。以下帳號與 QR Code 目前皆為示意。',
      infoTitle: '店家資訊（示意）', address: '台北市中山區蓮花路 88 號 2 樓', hours: '週二至週日 11:00–20:00｜週一休息', phone: '02-2345-6789', instagram: '@cailian.demo',
      policyTitle: '預約規則（示意）', policies: ['預約需支付示意訂金 NT$ 1,000。', '如需改期，請於 48 小時前透過 LINE 聯絡。', '遲到超過 20 分鐘可能需要調整當日服務。', '正式規則將由店家確認後替換。']
    },
    footer: { note: '自然輪廓，精準設計。這是一個使用偽資料製作的 MVP 展示網站。', rights: '© 2026 采蓮紋繡 MVP Demo' }
  },
  en: {
    htmlLocale: 'en', languageName: 'English', shortLanguage: 'EN',
    demo: 'MVP demo content — brand details, prices and images will be replaced before launch.',
    brand: 'Cailian Atelier', brandSub: 'Permanent Makeup Atelier',
    nav: { home: 'Home', services: 'Services & pricing', portfolio: 'Portfolio', about: 'About', booking: 'Book now' },
    actions: { line: 'Book via LINE', work: 'See our work', details: 'View service', allServices: 'View all services', allCases: 'See more cases', close: 'Close', menu: 'Open menu', map: 'Open Google Maps' },
    meta: {
      home: ['Cailian Atelier｜Natural definition, precisely designed', 'A multilingual permanent makeup demo website for brows, eyeliner and lip blush with LINE booking.'],
      services: ['Services & pricing｜Cailian Atelier', 'Explore demo services, pricing, process, healing notes and frequently asked questions.'],
      portfolio: ['Portfolio｜Cailian Atelier', 'Browse demo before-and-after cases for brows, eyeliner and lip blush.'],
      about: ['About｜Cailian Atelier', 'Meet our demo artist and learn about the studio approach and hygiene process.'],
      booking: ['Book via LINE｜Cailian Atelier', 'Add the studio on LINE and view demo location, hours and booking policies.']
    },
    home: {
      eyebrow: 'Precise design · Natural definition · Clear communication', title: 'Still unmistakably you, <em>only more defined.</em>', lead: 'From brows and eyes to lip tone, every detail begins with thoughtful assessment and a design made for your features.',
      featureTitles: ['Personal design', 'Refined technique', 'A calm experience'], featureBodies: ['Built around your features, never a copied brow template.', 'Soft lines and balanced pigments preserve your character.', 'Clear guidance on the process, healing and aftercare.'],
      servicesTitle: 'Find the service that fits you', resultsTitle: 'Real change, naturally shown', trustTitle: 'A studio where every question is welcome', trustBody: 'Demo content: one-to-one consultation, single-use materials and a transparent process for confident decisions.',
      proof: ['Demo credentials', 'Selected pigments', 'Hygiene process', 'Personal consultation'], reviewsTitle: 'What clients say', reviews: ['“My brows look natural — I simply look more awake.”', '“Every step and aftercare detail was explained clearly.”', '“Being able to ask questions in my language made me feel at ease.”']
    },
    services: {
      eyebrow: 'Services & pricing', title: 'Understand first. Choose with confidence.', lead: 'All prices, timings and results below are MVP placeholders pending studio confirmation.', labels: { from: 'Demo price', time: 'Treatment time', lasting: 'Expected wear', retouch: 'Retouch', suitable: 'Best for', recovery: 'Healing' },
      items: [
        { key: 'brow', name: 'Powder brows', price: 'From NT$ 8,800', time: 'About 2.5 hours', lasting: 'About 12–24 months', retouch: 'One demo retouch', suitable: 'Sparse brows, shape correction or less daily makeup', recovery: 'About 7–14 days', desc: 'A soft powder finish with a natural gradient and visible hair texture.' },
        { key: 'eye', name: 'Lash-line enhancement', price: 'From NT$ 6,800', time: 'About 2 hours', lasting: 'About 18–30 months', retouch: 'By demo plan', suitable: 'A clearer eye line without a heavy makeup look', recovery: 'About 5–10 days', desc: 'Subtle pigment placed along the lash line for quietly defined eyes.' },
        { key: 'lip', name: 'Natural lip blush', price: 'From NT$ 10,800', time: 'About 3 hours', lasting: 'About 18–30 months', retouch: 'One demo retouch', suitable: 'Uneven or dull lip tone and a fresher everyday look', recovery: 'About 7–14 days', desc: 'A custom tone chosen for your complexion and natural lip colour.' }
      ],
      processTitle: 'The process', process: [['01', 'Consult', 'Discuss expectations, habits and natural features.'], ['02', 'Map', 'Confirm proportion, shape and visual balance.'], ['03', 'Treat', 'Work from the approved design and pigment plan.'], ['04', 'Aftercare', 'Explain healing and everyday care.']], cautionTitle: 'Before booking', caution: 'If you are pregnant, breastfeeding, taking medication or managing a skin or health condition, consult a qualified medical professional first. This website does not provide medical advice.',
      faqTitle: 'Frequently asked questions', faq: [['Does it hurt?', 'Comfort varies by person. The final studio process will explain each stage before treatment.'], ['When can I wash my face or wear makeup?', 'Healing depends on the service and individual response. Specific aftercare will be provided.'], ['Is a retouch always required?', 'It depends on retention, skin type and desired result.'], ['How long does it last?', 'Skin, lifestyle, metabolism and aftercare all affect retention.'], ['Can old brow or lip pigment be corrected?', 'The remaining colour and shape must be assessed before correction.'], ['How do I reschedule or cancel?', 'Contact the studio through LINE. Final notice and deposit terms will be added later.']]
    },
    portfolio: { eyebrow: 'Portfolio', title: 'See the detail. See the individual.', lead: 'All images are layout placeholders. The live site will only use real client work with permission.', filters: { all: 'All', brow: 'Brows', eye: 'Eyeliner', lip: 'Lips' }, cases: [['brow', 'Powder brow demo 01', 'Softened a sparse tail while preserving the natural front.', 'brow-before.svg', 'brow-after.svg'], ['brow', 'Powder brow demo 02', 'Balanced the arch and visual symmetry.', 'brow-before.svg', 'brow-after.svg'], ['eye', 'Lash-line demo 01', 'Added quiet definition along the lashes.', 'eye.svg', 'eye.svg'], ['lip', 'Lip blush demo 01', 'Balanced uneven colour with a muted berry tone.', 'lip.svg', 'lip.svg'], ['brow', 'Brow design demo 03', 'Kept a natural curve suited to the face.', 'brow-before.svg', 'brow-after.svg'], ['lip', 'Lip blush demo 02', 'Reduced dullness while keeping translucency.', 'lip.svg', 'lip.svg']], before: 'Before', after: 'After', demoLabel: 'Demo case' },
    about: { eyebrow: 'About', title: 'Skill should be visible. Trust should be clear.', lead: 'The artist, credentials and studio details below are MVP placeholders.', artistTitle: 'Demo artist｜Cailian Lin', artistBody: 'Good permanent makeup does not replace a face. It clarifies the shape already there. Every appointment begins with listening, observation and a design the client understands.', credentials: ['Demo professional training', 'Demo brow and colour study', 'Demo hygiene-process training'], hygieneTitle: 'Hygiene principles', hygiene: ['Single-use contact materials', 'Process-based surface cleaning', 'Clearly identified tools and pigments', 'Pre-treatment health and safety check'], studioTitle: 'A calm, bright one-to-one studio', studioBody: 'Studio photos and location are placeholders. The final site will show the entrance, consultation area and treatment room.' },
    booking: { eyebrow: 'Book now', title: 'A question is enough to begin.', lead: 'The MVP collects no information on the website. Add the studio on LINE for a human reply about services, times and preparation.', lineTitle: 'Add our LINE official account', lineBody: 'On mobile, the button opens LINE. On desktop, it shows a QR code. The account and QR are demo placeholders.', infoTitle: 'Studio details (demo)', address: '2F, No. 88 Lotus Road, Zhongshan District, Taipei', hours: 'Tue–Sun 11:00–20:00｜Closed Monday', phone: '02-2345-6789', instagram: '@cailian.demo', policyTitle: 'Booking policies (demo)', policies: ['A demo deposit of NT$ 1,000 is required.', 'Contact us on LINE at least 48 hours before rescheduling.', 'Arrivals over 20 minutes late may need to be rescheduled.', 'Final policies will be replaced after studio confirmation.'] },
    footer: { note: 'Natural definition, precisely designed. This MVP website uses placeholder content.', rights: '© 2026 Cailian Atelier MVP Demo' }
  },
  vi: {
    htmlLocale: 'vi', languageName: 'Tiếng Việt', shortLanguage: 'VI',
    demo: 'Nội dung minh họa MVP — thông tin thương hiệu, giá và hình ảnh sẽ được thay trước khi ra mắt.',
    brand: 'Cailian Atelier', brandSub: 'Permanent Makeup Atelier',
    nav: { home: 'Trang chủ', services: 'Dịch vụ & giá', portfolio: 'Tác phẩm', about: 'Về chúng tôi', booking: 'Đặt lịch ngay' },
    actions: { line: 'Đặt lịch qua LINE', work: 'Xem tác phẩm', details: 'Xem dịch vụ', allServices: 'Xem tất cả dịch vụ', allCases: 'Xem thêm trường hợp', close: 'Đóng', menu: 'Mở menu', map: 'Mở Google Maps' },
    meta: {
      home: ['Cailian Atelier｜Đường nét tự nhiên, thiết kế chính xác', 'Website minh họa phun xăm ba ngôn ngữ với dịch vụ chân mày, mí mắt, môi và đặt lịch qua LINE.'],
      services: ['Dịch vụ & giá｜Cailian Atelier', 'Xem dịch vụ, giá minh họa, quy trình, thời gian hồi phục và câu hỏi thường gặp.'],
      portfolio: ['Tác phẩm｜Cailian Atelier', 'Xem các trường hợp trước và sau minh họa cho chân mày, mí mắt và môi.'],
      about: ['Về chúng tôi｜Cailian Atelier', 'Tìm hiểu nghệ nhân minh họa, phong cách thiết kế và quy trình vệ sinh.'],
      booking: ['Đặt lịch qua LINE｜Cailian Atelier', 'Thêm LINE của cửa hàng và xem địa chỉ, giờ mở cửa, quy định đặt lịch minh họa.']
    },
    home: { eyebrow: 'Thiết kế chính xác · Đường nét tự nhiên · Giao tiếp rõ ràng', title: 'Vẫn là chính bạn, <em>chỉ tinh tế hơn.</em>', lead: 'Từ chân mày, ánh mắt đến sắc môi, mọi chi tiết bắt đầu bằng đánh giá kỹ lưỡng và thiết kế riêng.', featureTitles: ['Thiết kế cá nhân', 'Kỹ thuật tinh tế', 'Trải nghiệm an tâm'], featureBodies: ['Dựa trên khuôn mặt thật, không sao chép khuôn mày có sẵn.', 'Đường nét mềm và màu cân bằng giữ lại nét riêng.', 'Giải thích rõ quy trình, hồi phục và chăm sóc.'], servicesTitle: 'Chọn dịch vụ phù hợp', resultsTitle: 'Thay đổi thật, thể hiện tự nhiên', trustTitle: 'Nơi bạn có thể hỏi mọi điều', trustBody: 'Nội dung minh họa: tư vấn riêng, vật tư dùng một lần và quy trình minh bạch.', proof: ['Chứng chỉ minh họa', 'Màu mực tuyển chọn', 'Quy trình vệ sinh', 'Tư vấn cá nhân'], reviewsTitle: 'Khách hàng chia sẻ', reviews: ['“Chân mày rất tự nhiên, gương mặt chỉ trông tươi tỉnh hơn.”', '“Mọi bước và cách chăm sóc đều được giải thích rõ.”', '“Được trao đổi bằng ngôn ngữ quen thuộc khiến tôi yên tâm hơn.”'] },
    services: { eyebrow: 'Dịch vụ & giá', title: 'Hiểu rõ trước khi lựa chọn.', lead: 'Giá, thời gian và kết quả dưới đây là dữ liệu minh họa MVP.', labels: { from: 'Giá minh họa', time: 'Thời gian', lasting: 'Duy trì', retouch: 'Dặm lại', suitable: 'Phù hợp với', recovery: 'Hồi phục' }, items: [{ key: 'brow', name: 'Chân mày phun bột', price: 'Từ NT$ 8.800', time: 'Khoảng 2,5 giờ', lasting: 'Khoảng 12–24 tháng', retouch: 'Một lần dặm minh họa', suitable: 'Mày thưa, cần chỉnh dáng hoặc giảm thời gian trang điểm', recovery: 'Khoảng 7–14 ngày', desc: 'Hiệu ứng bột mềm với chuyển màu tự nhiên.' }, { key: 'eye', name: 'Viền mí tự nhiên', price: 'Từ NT$ 6.800', time: 'Khoảng 2 giờ', lasting: 'Khoảng 18–30 tháng', retouch: 'Theo gói minh họa', suitable: 'Muốn ánh mắt rõ hơn nhưng không đậm', recovery: 'Khoảng 5–10 ngày', desc: 'Màu tinh tế sát chân mi giúp ánh mắt rõ nét.' }, { key: 'lip', name: 'Phun môi tự nhiên', price: 'Từ NT$ 10.800', time: 'Khoảng 3 giờ', lasting: 'Khoảng 18–30 tháng', retouch: 'Một lần dặm minh họa', suitable: 'Môi không đều màu, xỉn hoặc muốn tươi tắn hơn', recovery: 'Khoảng 7–14 ngày', desc: 'Màu được chọn theo sắc da và màu môi tự nhiên.' }], processTitle: 'Quy trình', process: [['01', 'Tư vấn', 'Trao đổi mong muốn, thói quen và đặc điểm tự nhiên.'], ['02', 'Định hình', 'Xác nhận tỷ lệ, đường nét và cân bằng.'], ['03', 'Thực hiện', 'Làm theo thiết kế và màu đã xác nhận.'], ['04', 'Chăm sóc', 'Hướng dẫn hồi phục và chăm sóc hằng ngày.']], cautionTitle: 'Trước khi đặt lịch', caution: 'Nếu đang mang thai, cho con bú, dùng thuốc hoặc có vấn đề da và sức khỏe, hãy hỏi chuyên gia y tế đủ điều kiện trước. Website này không cung cấp tư vấn y khoa.', faqTitle: 'Câu hỏi thường gặp', faq: [['Có đau không?', 'Cảm giác tùy mỗi người. Quy trình chính thức sẽ được giải thích trước khi thực hiện.'], ['Khi nào có thể rửa mặt hoặc trang điểm?', 'Thời gian hồi phục tùy dịch vụ và cơ địa. Hướng dẫn cụ thể sẽ được cung cấp.'], ['Luôn cần dặm lại không?', 'Tùy khả năng giữ màu, loại da và kết quả mong muốn.'], ['Hiệu quả duy trì bao lâu?', 'Da, lối sống, chuyển hóa và chăm sóc đều ảnh hưởng.'], ['Có thể sửa màu mày hoặc môi cũ không?', 'Cần đánh giá màu và hình dạng còn lại trước.'], ['Đổi hoặc hủy lịch thế nào?', 'Liên hệ cửa hàng qua LINE. Quy định chính thức sẽ được bổ sung.']] },
    portfolio: { eyebrow: 'Tác phẩm', title: 'Nhìn thấy chi tiết và nét riêng.', lead: 'Tất cả hình ảnh hiện là nội dung minh họa. Website chính thức chỉ dùng ảnh khách hàng đã đồng ý.', filters: { all: 'Tất cả', brow: 'Chân mày', eye: 'Mí mắt', lip: 'Môi' }, cases: [['brow', 'Mẫu chân mày 01', 'Làm đầy phần đuôi thưa, giữ đầu mày tự nhiên.', 'brow-before.svg', 'brow-after.svg'], ['brow', 'Mẫu chân mày 02', 'Cân bằng đỉnh mày và hai bên.', 'brow-before.svg', 'brow-after.svg'], ['eye', 'Mẫu viền mí 01', 'Tăng độ rõ sát chân mi.', 'eye.svg', 'eye.svg'], ['lip', 'Mẫu phun môi 01', 'Cân bằng màu môi bằng tông berry nhẹ.', 'lip.svg', 'lip.svg'], ['brow', 'Mẫu thiết kế mày 03', 'Giữ độ cong tự nhiên theo khuôn mặt.', 'brow-before.svg', 'brow-after.svg'], ['lip', 'Mẫu phun môi 02', 'Giảm xỉn màu và giữ độ trong.', 'lip.svg', 'lip.svg']], before: 'Trước', after: 'Sau', demoLabel: 'Mẫu minh họa' },
    about: { eyebrow: 'Về chúng tôi', title: 'Kỹ thuật cần được thấy. Niềm tin cần rõ ràng.', lead: 'Nghệ nhân, chứng chỉ và thông tin studio dưới đây là nội dung minh họa MVP.', artistTitle: 'Nghệ nhân minh họa｜Cailian Lin', artistBody: 'Phun xăm tốt không thay đổi một khuôn mặt mà làm rõ đường nét vốn có. Mỗi buổi bắt đầu bằng lắng nghe, quan sát và thiết kế dễ hiểu.', credentials: ['Đào tạo chuyên môn minh họa', 'Nghiên cứu dáng mày và màu minh họa', 'Đào tạo vệ sinh minh họa'], hygieneTitle: 'Nguyên tắc vệ sinh', hygiene: ['Vật tư tiếp xúc dùng một lần', 'Vệ sinh bề mặt theo quy trình', 'Dụng cụ và màu có nguồn rõ ràng', 'Xác nhận sức khỏe trước khi thực hiện'], studioTitle: 'Không gian riêng tư, sáng và yên tĩnh', studioBody: 'Ảnh và địa chỉ hiện là minh họa. Website chính thức sẽ hiển thị lối vào, khu tư vấn và phòng thực hiện.' },
    booking: { eyebrow: 'Đặt lịch ngay', title: 'Chỉ một câu hỏi cũng đủ để bắt đầu.', lead: 'MVP không thu thập dữ liệu trên website. Hãy thêm LINE để được nhân viên tư vấn trực tiếp.', lineTitle: 'Thêm tài khoản LINE chính thức', lineBody: 'Trên điện thoại, nút sẽ mở LINE. Trên máy tính, mã QR sẽ hiện ra. Tài khoản và QR hiện là minh họa.', infoTitle: 'Thông tin cửa hàng (minh họa)', address: 'Tầng 2, số 88 đường Lotus, quận Zhongshan, Đài Bắc', hours: 'Thứ Ba–Chủ Nhật 11:00–20:00｜Nghỉ Thứ Hai', phone: '02-2345-6789', instagram: '@cailian.demo', policyTitle: 'Quy định đặt lịch (minh họa)', policies: ['Cần đặt cọc minh họa NT$ 1.000.', 'Liên hệ qua LINE trước 48 giờ nếu muốn đổi lịch.', 'Trễ quá 20 phút có thể phải đổi lịch.', 'Quy định chính thức sẽ được thay sau khi cửa hàng xác nhận.'] },
    footer: { note: 'Đường nét tự nhiên, thiết kế chính xác. Website MVP này sử dụng nội dung minh họa.', rights: '© 2026 Cailian Atelier MVP Demo' }
  }
};

function routeFor(language, page) {
  var slug = pageSlugs[page];
  return '/' + language + '/' + (slug ? slug + '/' : '');
}

function image(name, alt, className) {
  return '<img class="' + (className || '') + '" src="/assets/' + name + '" alt="' + alt + '" loading="lazy">';
}

function logo(copy) {
  return '<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 53C17 45 10 34 12 20c9 2 16 7 20 15 4-8 11-13 20-15 2 14-5 25-20 33Z"/><path d="M32 35C23 27 23 17 32 8c9 9 9 19 0 27Z"/><path d="M18 31c-5 0-9 2-13 5 6 11 15 17 27 17M46 31c5 0 9 2 13 5-6 11-15 17-27 17"/></svg></span><span><strong>' + copy.brand + '</strong><small>' + copy.brandSub + '</small></span>';
}

function lineButton(copy, extraClass) {
  return '<button class="line-button ' + (extraClass || '') + '" type="button" data-line-trigger data-line-url="' + lineUrl + '"><span class="line-bubble" aria-hidden="true">LINE</span>' + copy.actions.line + '</button>';
}

function header(language, page, copy) {
  var nav = pageKeys.map(function (key) {
    return '<a href="' + routeFor(language, key) + '"' + (key === page ? ' aria-current="page"' : '') + '>' + copy.nav[key] + '</a>';
  }).join('');
  var languages = languageCodes.map(function (code) {
    return '<a href="' + routeFor(code, page) + '" data-language="' + code + '"' + (code === language ? ' aria-current="true"' : '') + '>' + content[code].shortLanguage + '</a>';
  }).join('');
  return '<div class="demo-banner">' + copy.demo + '</div>' +
    '<header class="site-header"><a class="brand" href="' + routeFor(language, 'home') + '" aria-label="' + copy.brand + '">' + logo(copy) + '</a>' +
    '<nav class="desktop-nav" aria-label="Primary">' + nav + '</nav>' +
    '<div class="header-actions"><div class="language-switcher" aria-label="Language">' + languages + '</div>' + lineButton(copy, 'header-line') +
    '<button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="mobile-menu" aria-label="' + copy.actions.menu + '"><span></span><span></span></button></div></header>' +
    '<nav class="mobile-menu" id="mobile-menu" data-mobile-menu aria-label="Mobile"><div>' + nav + '</div><div class="mobile-languages">' + languages + '</div></nav>';
}

function pageIntro(copy, section) {
  return '<section class="page-intro reveal"><p class="eyebrow">' + section.eyebrow + '</p><h1>' + section.title + '</h1><p>' + section.lead + '</p></section>';
}

function servicePreview(language, copy) {
  return '<section class="section services-preview"><div class="section-heading"><div><p class="eyebrow">Services</p><h2>' + copy.home.servicesTitle + '</h2></div><a class="text-link" href="' + routeFor(language, 'services') + '">' + copy.actions.allServices + '</a></div><div class="service-preview-grid">' + copy.services.items.map(function (service) {
    var asset = service.key === 'brow' ? 'brow-after.svg' : service.key === 'eye' ? 'eye.svg' : 'lip.svg';
    return '<article class="service-preview-card reveal"><div class="image-frame">' + image(asset, service.name + ' demo') + '<span class="demo-chip">DEMO</span></div><p class="eyebrow">' + service.price + '</p><h3>' + service.name + '</h3><p>' + service.desc + '</p><a class="text-link" href="' + routeFor(language, 'services') + '">' + copy.actions.details + '</a></article>';
  }).join('') + '</div></section>';
}

function casesPreview(language, copy) {
  return '<section class="section results-section"><div class="section-heading"><div><p class="eyebrow">Before / After</p><h2>' + copy.home.resultsTitle + '</h2></div><a class="text-link" href="' + routeFor(language, 'portfolio') + '">' + copy.actions.allCases + '</a></div><div class="result-grid">' + copy.portfolio.cases.slice(0, 3).map(function (item) {
    return '<article class="result-card reveal"><div class="before-after"><figure>' + image(item[3], item[1] + ' before') + '<figcaption>' + copy.portfolio.before + '</figcaption></figure><figure>' + image(item[4], item[1] + ' after') + '<figcaption>' + copy.portfolio.after + '</figcaption></figure></div><h3>' + item[1] + '</h3><p>' + item[2] + '</p></article>';
  }).join('') + '</div></section>';
}

function renderHome(language, copy) {
  return '<main id="main"><section class="home-hero"><div class="hero-copy reveal"><p class="eyebrow">' + copy.home.eyebrow + '</p><h1>' + copy.home.title + '</h1><p class="hero-lead">' + copy.home.lead + '</p><a class="text-link hero-work-link" href="' + routeFor(language, 'portfolio') + '">' + copy.actions.work + '</a><div class="hero-features">' + copy.home.featureTitles.map(function (title, index) { return '<div><span class="feature-symbol">0' + (index + 1) + '</span><h2>' + title + '</h2><p>' + copy.home.featureBodies[index] + '</p></div>'; }).join('') + '</div></div><div class="hero-visual">' + image('hero-face.svg', 'Permanent makeup design demo', 'hero-image') + '<div class="mapping-line mapping-line-one"></div><div class="mapping-line mapping-line-two"></div><span class="mapping-point point-one"></span><span class="mapping-point point-two"></span><span class="demo-chip hero-demo">DEMO IMAGE</span></div></section>' + servicePreview(language, copy) + casesPreview(language, copy) +
    '<section class="section trust-section"><div class="trust-photo">' + image('studio.svg', copy.about.studioTitle) + '</div><div class="trust-copy"><p class="eyebrow">Studio</p><h2>' + copy.home.trustTitle + '</h2><p>' + copy.home.trustBody + '</p><div class="proof-grid">' + copy.home.proof.map(function (item) { return '<span>' + item + '</span>'; }).join('') + '</div></div></section>' +
    '<section class="section reviews-section"><div class="section-heading"><div><p class="eyebrow">Reviews</p><h2>' + copy.home.reviewsTitle + '</h2></div></div><div class="review-grid">' + copy.home.reviews.map(function (review, index) { return '<blockquote class="review-card reveal"><span>“0' + (index + 1) + '”</span><p>' + review + '</p><footer>Demo client</footer></blockquote>'; }).join('') + '</div></section></main>';
}

function renderServices(language, copy) {
  return '<main id="main">' + pageIntro(copy, copy.services) + '<section class="section service-list">' + copy.services.items.map(function (service, index) {
    var asset = service.key === 'brow' ? 'brow-after.svg' : service.key === 'eye' ? 'eye.svg' : 'lip.svg';
    return '<article class="service-detail reveal"><div class="service-number">0' + (index + 1) + '</div><div class="service-detail-image">' + image(asset, service.name + ' demo') + '<span class="demo-chip">DEMO</span></div><div class="service-detail-copy"><p class="eyebrow">' + service.price + '</p><h2>' + service.name + '</h2><p class="service-description">' + service.desc + '</p><dl><div><dt>' + copy.services.labels.time + '</dt><dd>' + service.time + '</dd></div><div><dt>' + copy.services.labels.lasting + '</dt><dd>' + service.lasting + '</dd></div><div><dt>' + copy.services.labels.retouch + '</dt><dd>' + service.retouch + '</dd></div><div><dt>' + copy.services.labels.suitable + '</dt><dd>' + service.suitable + '</dd></div><div><dt>' + copy.services.labels.recovery + '</dt><dd>' + service.recovery + '</dd></div></dl></div></article>';
  }).join('') + '</section><section class="section process-section"><div class="section-heading"><div><p class="eyebrow">Process</p><h2>' + copy.services.processTitle + '</h2></div></div><ol class="process-grid">' + copy.services.process.map(function (step) { return '<li><span>' + step[0] + '</span><h3>' + step[1] + '</h3><p>' + step[2] + '</p></li>'; }).join('') + '</ol><aside class="caution"><h3>' + copy.services.cautionTitle + '</h3><p>' + copy.services.caution + '</p></aside></section><section class="section faq-section"><div class="faq-heading"><p class="eyebrow">FAQ</p><h2>' + copy.services.faqTitle + '</h2></div><div class="faq-list">' + copy.services.faq.map(function (faq, index) { return '<article class="faq-item"><h3><button type="button" data-faq-button aria-expanded="false" aria-controls="faq-' + language + '-' + index + '"><span>' + faq[0] + '</span><span aria-hidden="true">＋</span></button></h3><div id="faq-' + language + '-' + index + '" class="faq-answer" hidden><p>' + faq[1] + '</p></div></article>'; }).join('') + '</div></section></main>';
}

function renderPortfolio(language, copy) {
  return '<main id="main">' + pageIntro(copy, copy.portfolio) + '<section class="section portfolio-section"><div class="filter-bar" aria-label="Portfolio filters">' + Object.keys(copy.portfolio.filters).map(function (key) { return '<button type="button" data-filter="' + key + '"' + (key === 'all' ? ' aria-pressed="true"' : ' aria-pressed="false"') + '>' + copy.portfolio.filters[key] + '</button>'; }).join('') + '</div><div class="portfolio-grid">' + copy.portfolio.cases.map(function (item) { return '<article class="portfolio-card reveal" data-case-category="' + item[0] + '"><div class="before-after"><figure>' + image(item[3], item[1] + ' ' + copy.portfolio.before) + '<figcaption>' + copy.portfolio.before + '</figcaption></figure><figure>' + image(item[4], item[1] + ' ' + copy.portfolio.after) + '<figcaption>' + copy.portfolio.after + '</figcaption></figure></div><span class="demo-chip">' + copy.portfolio.demoLabel + '</span><h2>' + item[1] + '</h2><p>' + item[2] + '</p></article>'; }).join('') + '</div></section></main>';
}

function renderAbout(language, copy) {
  return '<main id="main">' + pageIntro(copy, copy.about) + '<section class="section artist-section"><div class="artist-image">' + image('artist.svg', copy.about.artistTitle) + '<span class="demo-chip">DEMO IMAGE</span></div><div class="artist-copy reveal"><p class="eyebrow">Artist</p><h2>' + copy.about.artistTitle + '</h2><p>' + copy.about.artistBody + '</p><ul class="credential-list">' + copy.about.credentials.map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul></div></section><section class="section hygiene-section"><div><p class="eyebrow">Hygiene</p><h2>' + copy.about.hygieneTitle + '</h2></div><ol>' + copy.about.hygiene.map(function (item, index) { return '<li><span>0' + (index + 1) + '</span>' + item + '</li>'; }).join('') + '</ol></section><section class="section studio-section"><div class="studio-copy reveal"><p class="eyebrow">Studio</p><h2>' + copy.about.studioTitle + '</h2><p>' + copy.about.studioBody + '</p></div><div class="studio-image">' + image('studio.svg', copy.about.studioTitle) + '<span class="demo-chip">DEMO IMAGE</span></div></section></main>';
}

function renderBooking(language, copy) {
  return '<main id="main" data-booking-page>' + pageIntro(copy, copy.booking) + '<section class="section booking-grid"><div class="booking-line-panel reveal"><span class="line-orbit" aria-hidden="true"></span><p class="eyebrow">LINE</p><h2>' + copy.booking.lineTitle + '</h2><p>' + copy.booking.lineBody + '</p>' + lineButton(copy, 'booking-line') + '<p class="no-form-note">No form · No personal data</p></div><div class="booking-info"><h2>' + copy.booking.infoTitle + '</h2><dl><div><dt>Address</dt><dd>' + copy.booking.address + '</dd></div><div><dt>Hours</dt><dd>' + copy.booking.hours + '</dd></div><div><dt>Phone</dt><dd><a href="tel:+886223456789">' + copy.booking.phone + '</a></dd></div><div><dt>Instagram</dt><dd><a href="https://www.instagram.com/" rel="noreferrer">' + copy.booking.instagram + '</a></dd></div></dl><a class="earth-button" href="https://maps.google.com/?q=Taipei" target="_blank" rel="noreferrer">' + copy.actions.map + '</a></div></section><section class="section policy-section"><p class="eyebrow">Policy</p><h2>' + copy.booking.policyTitle + '</h2><ul>' + copy.booking.policies.map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul></section></main>';
}

function footer(language, page, copy) {
  return '<footer class="site-footer"><div><a class="brand footer-brand" href="' + routeFor(language, 'home') + '">' + logo(copy) + '</a><p>' + copy.footer.note + '</p></div><nav aria-label="Footer">' + pageKeys.map(function (key) { return '<a href="' + routeFor(language, key) + '">' + copy.nav[key] + '</a>'; }).join('') + '</nav><small>' + copy.footer.rights + '</small></footer>' +
    '<div class="mobile-line-bar">' + lineButton(copy, '') + '</div>' +
    '<div class="modal-backdrop" data-line-modal hidden><section class="line-modal" role="dialog" aria-modal="true" aria-labelledby="line-modal-title"><button class="modal-close" type="button" data-modal-close aria-label="' + copy.actions.close + '">×</button><p class="eyebrow">LINE</p><h2 id="line-modal-title">' + copy.booking.lineTitle + '</h2><img src="/assets/line-qr-demo.svg" alt="Demo LINE QR Code"><p>' + copy.booking.lineBody + '</p><small>DEMO QR · @cailian-demo</small></section></div>';
}

function renderPage(language, page) {
  var copy = content[language];
  var meta = copy.meta[page];
  var alternates = languageCodes.map(function (code) { return '<link rel="alternate" hreflang="' + code + '" href="https://example.com' + routeFor(code, page) + '">'; }).join('');
  var body = page === 'home' ? renderHome(language, copy) : page === 'services' ? renderServices(language, copy) : page === 'portfolio' ? renderPortfolio(language, copy) : page === 'about' ? renderAbout(language, copy) : renderBooking(language, copy);
  return '<!doctype html><html lang="' + language + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + meta[0] + '</title><meta name="description" content="' + meta[1] + '"><meta name="theme-color" content="#faf8f6"><link rel="canonical" href="https://example.com' + routeFor(language, page) + '">' + alternates + '<link rel="stylesheet" href="/assets/styles.css"><script src="/assets/app.js" defer></script></head><body data-language="' + language + '" data-page="' + page + '"><a class="skip-link" href="#main">Skip to content</a>' + header(language, page, copy) + body + footer(language, page, copy) + '</body></html>';
}

function renderLanguageRedirect() {
  return '<!doctype html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cailian Atelier</title><script>(function(){var saved;try{saved=localStorage.getItem("site-language");}catch(e){}var lang=saved||((navigator.language||"").toLowerCase().indexOf("vi")===0?"vi":(navigator.language||"").toLowerCase().indexOf("en")===0?"en":"zh");location.replace("/"+lang+"/");}());</script><noscript><meta http-equiv="refresh" content="0; url=/zh/"></noscript></head><body><p><a href="/zh/">中文</a> · <a href="/en/">English</a> · <a href="/vi/">Tiếng Việt</a></p></body></html>';
}

function renderNotFound() {
  return '<!doctype html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/assets/styles.css"><title>Page not found</title></head><body><main class="not-found"><p class="eyebrow">404</p><h1>找不到這個頁面</h1><a class="earth-button" href="/zh/">返回首頁</a></main></body></html>';
}

function renderSitemap() {
  var urls = [];
  languageCodes.forEach(function (language) { pageKeys.forEach(function (page) { urls.push('<url><loc>https://example.com' + routeFor(language, page) + '</loc></url>'); }); });
  return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls.join('') + '</urlset>';
}

module.exports = { languageCodes: languageCodes, pageKeys: pageKeys, pageSlugs: pageSlugs, renderPage: renderPage, renderLanguageRedirect: renderLanguageRedirect, renderNotFound: renderNotFound, renderSitemap: renderSitemap };
