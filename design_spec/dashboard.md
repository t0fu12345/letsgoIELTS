# **Design Specification: letsgoIELTS Student Dashboard**
Tài liệu đặc tả chi tiết giao diện trang Bảng điều khiển cá nhân (Student Dashboard) của hệ thống **letsgoIELTS**, chuẩn hóa theo Material Design 3 (M3).

## **1. Cấu trúc Bố cục Tổng thể (Dashboard Layout)**
Sử dụng cấu trúc ứng dụng web tiêu chuẩn (Web App Layout) với thanh điều hướng cố định bên trái và nội dung cuộn bên phải.

*   **Left Navigation Drawer (Thanh bên cố định):**
    *   Chiều rộng: `280px` (Mở rộng) hoặc `80px` (Thu gọn).
    *   **Header:** Logo `letsgoIELTS` (Kích thước nhỏ hơn trang chủ).
    *   **Menu Items (M3 Navigation Drawer):** Các mục được bo góc tròn `100px` khi được chọn (Active state), kèm nền màu Primary nhạt (`#E1F5FE`) và text màu Primary (`#1CB0F6`). 
        *   Các mục: *Dashboard (Active)*, *Exam Library*, *Analytics*, *My Notebook*, *Settings*.
*   **Top App Bar (Thanh trên cùng):**
    *   Nền trong suốt hoặc trắng, đổ bóng mờ khi cuộn trang (`elevation: 1`).
    *   **Trái:** Tiêu đề trang (VD: "Dashboard").
    *   **Phải (Cụm tiện ích):** 
        *   Icon ngọn lửa vàng (Streak) kèm số ngày học liên tiếp (VD: `🔥 12 Days`).
        *   Icon quả chuông (Notifications).
        *   M3 Avatar (Ảnh đại diện người dùng, góc bo tròn `50%`).

## **2. Phân bổ Nội dung Chính (Main Content Area)**
Khu vực nội dung có max-width `1200px`, margin auto, khoảng cách đệm (padding) `24px`. Áp dụng CSS Grid để chia các khối (Cards).

### **A. Khối Chào mừng & Mục tiêu (Hero Target Banner)**
*   **Component:** `M3 Elevated Card` bo góc `24px`, trải dài 100% chiều ngang (Full width).
*   **Background:** Gradient nhẹ từ màu Primary (`#1CB0F6`) sang Xanh dương đậm hơn, text màu Trắng. Có chìm một hình họa tiết vector mờ (mesh gradient) ở góc phải để tạo chiều sâu.
*   **Nội dung Trái:** 
    *   H2: *"Welcome back, Alex! Keep up the great work."*
    *   Body: *"You are 70% closer to your target goal."*
*   **Nội dung Phải (Target Badge):** 
    *   Một vòng tròn nổi bật hiển thị Mục tiêu: **Target: IELTS 7.0**. 
    *   Bên dưới là thanh `M3 Linear Progress Indicator` màu Vàng (`#F3C41B`) thể hiện mức độ sẵn sàng cho kỳ thi.

### **B. Khối Phân tích Năng lực (AI Analytics Grid)**
Sử dụng CSS Grid (chia 3 cột hoặc 2 cột tùy kích thước màn hình) để hiển thị các số liệu thống kê.

*   **Card 1: Biểu đồ Năng lực (Skill Radar)**
    *   `M3 Outlined Card` (Nền trắng, viền `#E5E5E5`).
    *   **Biểu đồ:** Sử dụng Radar Chart (Biểu đồ mạng nhện) hiển thị sự cân bằng của 4 kỹ năng: *Listening, Reading, Writing, Speaking*.
    *   Vùng màu của biểu đồ sử dụng màu Primary với `opacity: 0.2`, viền đậm.
*   **Card 2: Điểm dự kiến (Estimated Band Scores)**
    *   Hiển thị 4 thẻ nhỏ bên trong (hoặc list) với các con số lớn:
        *   L: 6.5 | R: 7.0 | W: 6.0 | S: 6.5
    *   Kỹ năng nào yếu nhất (VD: Writing 6.0) sẽ có chấm cảnh báo màu Cam/Đỏ kèm gợi ý *"Needs focus"*.
*   **Card 3: Hoạt động tuần (Weekly Activity)**
    *   Biểu đồ cột mini (Bar chart) hoặc biểu đồ nhiệt (Heatmap giống GitHub) thể hiện số lượng bài test/thời gian học trong 7 ngày qua. Tông màu xanh `#1CB0F6` đậm nhạt tùy theo thời lượng học.

### **C. Khối Đề xuất từ AI (Up Next for You)**
Khu vực hiển thị lộ trình học được cá nhân hóa, định dạng cuộn ngang (Horizontal Scroll/Carousel).

*   **Tiêu đề:** `Recommended by AI` (Có icon tia sét hoặc robot nhỏ bên cạnh).
*   **Các thẻ bài học (Actionable Cards):** `M3 Elevated Card` có viền bo tròn `16px`.
    *   **Thẻ 1 (Ưu tiên cao):** *"Boost your Writing Task 2"* - Kèm nút `M3 Filled Button` "Start Practice".
    *   **Thẻ 2:** *"Cambridge 18 - Listening Test 2"* (Dựa trên lịch sử chưa hoàn thành).
    *   **Thẻ 3:** *"Review 20 new Vocabulary words"* - Nút liên kết sang Sổ tay (Notebook).
    *   *Hiệu ứng:* Hover vào thẻ sẽ nổi khối cao hơn (Tăng elevation từ 1 lên 3) và viền đổi sang màu Primary.

### **D. Khối Lịch sử Làm bài (Recent Tests)**
Một bảng danh sách (M3 List) tối giản liệt kê các bài thi gần nhất.

*   **Bố cục danh sách:** Mỗi hàng hiển thị:
    *   Tên đề thi (VD: IELTS Mock Test #4).
    *   Ngày làm bài (VD: 2 days ago).
    *   Điểm số (VD: Overall 6.5).
    *   **Hành động (Action):** Nút Text Button màu `#1CB0F6`: *"View AI Feedback"* để xem lại chi tiết lỗi sai.

## **3. Quy chuẩn Tương tác & Trạng thái**
*   **Loading State (Trạng thái tải trang):** Khi Dashboard đang tải dữ liệu AI, sử dụng hiệu ứng `Skeleton Loading` (các khối xám mờ nhấp nháy lướt sóng) thay vì vòng xoay (spinner) truyền thống để giữ nguyên cấu trúc khung giao diện.
*   **Hover Effects:** Các thẻ Card và List Item đều có transition mượt mà (`duration: 0.2s`), khi di chuột vào sẽ xuất hiện lớp nền xám siêu nhạt (`#F8F9FA`).
