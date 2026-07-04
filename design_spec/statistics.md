# **Design Specification: letsgoIELTS Analytics & Statistics**
Tài liệu đặc tả chi tiết giao diện trang Thống kê & Phân tích Năng lực (Analytics & Statistics) của hệ thống **letsgoIELTS**. Trang này tập trung vào trực quan hóa dữ liệu (Data Visualization) để học viên theo dõi sự tiến bộ và nhận diện điểm yếu thông qua AI.

## **1. Cấu trúc Bố cục Tổng thể (Layout & Filtering)**
Sử dụng chung khung giao diện (Web App Layout) với thanh Navigation Drawer bên trái tương tự như trang Student Dashboard để đảm bảo tính đồng nhất.

*   **Top App Bar (Thanh công cụ & Bộ lọc):**
    *   **Tiêu đề:** "Performance Analytics".
    *   **Bộ lọc Thời gian (Time Range Filter):** Sử dụng `M3 Segmented Button` đặt ở góc phải để người dùng chuyển đổi nhanh khung thời gian thống kê: *Last 7 Days | Last 30 Days | All Time*.

## **2. Hệ thống Biểu đồ Cốt lõi (Core Analytics Cards)**
Áp dụng CSS Grid để phân bổ các khối `M3 Elevated Card` chứa biểu đồ. Background của các thẻ là màu Trắng (`#FFFFFF`), đổ bóng nhẹ (`elevation: 1`).

### **A. Biểu đồ Xu hướng Điểm số (Band Score Trend - Line Chart)**
*   **Vị trí:** Chiếm toàn bộ chiều rộng (Full-width) ở hàng đầu tiên.
*   **Loại biểu đồ:** Line Chart (Biểu đồ đường) trơn mượt (smooth curve).
*   **Hiển thị:** 
    *   Trục X: Thời gian (Các bài Mock Test đã làm).
    *   Trục Y: Thang điểm IELTS (0 - 9.0).
    *   **Đường Mục tiêu (Target Line):** Một đường kẻ ngang nét đứt (Dashed line) màu Vàng (`#F3C41B`) neo ở mốc điểm Target (VD: 7.0).
    *   **Đường Thực tế (Actual Score):** Đường kẻ đặc màu Primary (`#1CB0F6`). Có tooltip xuất hiện khi hover vào từng điểm (node) hiển thị ngày thi và điểm chi tiết.

### **B. Phân tích Độ lệch Kỹ năng (Skill Breakdown - Radar/Bar Chart)**
*   **Vị trí:** Cột trái, hàng thứ hai (Chiếm 50% width).
*   **Loại biểu đồ:** Radar Chart (Mạng nhện) hoặc Grouped Bar Chart.
*   **Nội dung:** So sánh điểm số trung bình của 4 kỹ năng (Nghe, Nói, Đọc, Viết) so với điểm yêu cầu để đạt được Target. 
*   **Tương tác:** Kỹ năng nào đang thấp nhất (Bottleneck skill) sẽ được highlight bằng màu Cam/Đỏ (`#B3261E`) để cảnh báo.

### **C. Bản đồ Nhiệt Độ Tần suất Học (Practice Heatmap)**
*   **Vị trí:** Cột phải, hàng thứ hai (Chiếm 50% width).
*   **Loại biểu đồ:** GitHub-style Contribution Heatmap.
*   **Hiển thị:** Các ô vuông nhỏ đại diện cho các ngày trong năm. Màu sắc ô vuông chuyển từ xám nhạt (`#E5E5E5`) sang xanh dương đậm (`#1CB0F6`) dựa trên thời lượng luyện tập (giờ học hoặc số bài test) trong ngày đó. Giúp học viên nhìn thấy chuỗi duy trì (Streak) trực quan nhất.

## **3. Khối Phân tích Chuyên sâu từ AI (AI Deep Insights)**
Nằm ở dưới cùng của trang, AI sẽ tổng hợp dữ liệu từ tất cả các bài đã nộp để đưa ra chẩn đoán "bắt bệnh".

*   **Giao diện:** Chia thành các cột `M3 Outlined Card` theo từng kỹ năng.
*   **Writing Insights (Điểm yếu Viết):**
    *   Hiển thị các `M3 Chip` cảnh báo màu Đỏ nhạt: *Lỗi Mạo từ (Articles)*, *Lặp từ vựng (Repetition)*.
    *   Kèm theo Text: *"AI nhận thấy bạn thường xuyên sai mạo từ a/an/the trong Task 2. Nhấn vào đây để làm bài tập khắc phục."*
*   **Speaking Insights (Điểm yếu Nói):**
    *   Hiển thị `M3 Chip`: *Phát âm âm /θ/ và /ð/ (Th- sounds)*, *Ngập ngừng (Hesitation)*.
    *   Nút CTA nhỏ: "Practice Pronunciation" chuyển hướng sang phòng tập Nói.
