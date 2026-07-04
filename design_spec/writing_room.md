# **Design Specification: letsgoIELTS Writing Room**
Tài liệu đặc tả chi tiết giao diện Phòng Luyện Viết (Writing Room) của hệ thống **letsgoIELTS**, thiết kế theo tiêu chuẩn Material Design 3 (M3) với trọng tâm là trải nghiệm chống xao nhãng (Distraction-free) và tích hợp chấm chữa AI sâu.

## **1. Cấu trúc Bố cục Tổng thể (Split-Screen Workspace)**
Sử dụng thiết kế chia đôi màn hình (Split-screen) cố định, triệt tiêu thanh điều hướng bên trái (Navigation Drawer) để tối đa hóa không gian tập trung.

*   **Top App Bar (Thanh công cụ trên cùng):**
    *   **Trái:** Icon `Arrow Back` (Quay lại) và Tiêu đề bài test (VD: "IELTS Academic Writing - Task 2").
    *   **Trung tâm (Timer):** Bộ đếm ngược thời gian (VD: `40:00`) hiển thị bằng font số đơn giản, tự động chuyển màu Cam/Đỏ (`#B3261E`) và nhấp nháy nhẹ khi thời gian còn dưới 5 phút.
    *   **Phải:** Một huy hiệu nhỏ hiển thị mục tiêu cá nhân (Target: 7.0) và nút `M3 Filled Button` màu Primary (`#1CB0F6`) chữ "Submit to AI".
*   **Cột Trái - Đề bài (Prompt Panel):**
    *   Chiếm 40% chiều rộng màn hình. Background màu xám siêu nhạt (`#F8F9FA`).
    *   Padding lớn (`32px`) tạo không gian thở.
    *   Chứa Text đề bài (Font size 18px, Line-height 1.6) và hình ảnh biểu đồ (nếu là Task 1).
*   **Cột Phải - Khu vực Soạn thảo (Editor Panel):**
    *   Chiếm 60% chiều rộng màn hình. Background màu Trắng tinh (`#FFFFFF`).
    *   Giao diện Editor tràn viền, ẩn thanh cuộn (Scrollbar) cho đến khi người dùng cuộn.

## **2. Đặc tả Khu vực Soạn thảo (The Text Editor)**
*   **Input Field:** Không sử dụng viền bao quanh (Borderless). Text field chiếm toàn bộ chiều cao màn hình còn lại.
*   **Typography:** Font chữ dễ đọc cho văn bản dài (VD: `Inter` hoặc `Roboto`, size `16px`, `line-height: 1.8`, màu `#1A1A1A`).
*   **Live Word Count (Bộ đếm từ trực tiếp):**
    *   Nằm cố định ở góc dưới cùng bên phải của Editor Panel.
    *   Hiển thị dạng `M3 Chip` hoặc text đơn giản: `Word count: 254 / 250`.
    *   Tương tác màu sắc: Màu xám khi chưa đủ từ, màu Xanh lá (`#14AE5C`) khi đạt yêu cầu số từ tối thiểu.

## **3. Giao diện Chấm chữa AI (Post-Submission AI Feedback State)**
Sau khi bấm "Submit to AI", Editor Panel chuyển sang trạng thái "Read-only" và kích hoạt lớp phủ phân tích (Analytics Overlay).

*   **Inline Highlights (Đánh dấu trực tiếp trên bài viết):**
    *   **Lỗi Ngữ pháp (Grammar):** Text bị sai được gạch chân gợn sóng màu Đỏ (`#B3261E`) hoặc bôi nền đỏ nhạt (`#FCE8E8`).
    *   **Từ vựng chưa tối ưu (Vocabulary):** Từ vựng cơ bản (Band thấp) được gạch chân gợn sóng màu Vàng/Cam (`#F3C41B`).
    *   **Cấu trúc câu hay (Good structures):** Bôi nền Xanh lá nhạt (`#E6F4EA`).
*   **Feedback Popover (Bảng chú giải nổi):**
    *   Khi người dùng click vào một từ bị bôi màu, một `M3 Modal/Popover` nhỏ xuất hiện ngay tại con trỏ chuột.
    *   Nội dung Popover: Giải thích lỗi sai, gợi ý từ vựng đồng nghĩa (Synonyms) giúp tiếp cận mục tiêu điểm số cao hơn, và một nút nhỏ "Apply Suggestion" để thay thế trực tiếp vào bài.
*   **Overall Score Card (Bảng điểm tổng quan):**
    *   Trượt ra từ bên phải màn hình (`M3 Standard Side Sheet`).
    *   Hiển thị điểm Overall Band cho bài viết và điểm chi tiết theo 4 tiêu chí: *Task Response, Coherence & Cohesion, Lexical Resource, Grammatical Range*.
