# **Design Specification: letsgoIELTS Reading Room**
Tài liệu đặc tả chi tiết giao diện Phòng Luyện Đọc (Reading Room) của hệ thống **letsgoIELTS**, thiết kế tối ưu cho việc đọc đoạn văn dài và làm bài tập tương tác, chuẩn hóa theo Material Design 3 (M3).

## **1. Cấu trúc Bố cục Tổng thể (Split-Screen Workspace)**
Tương tự phòng Writing, Reading Room sử dụng thiết kế chia đôi màn hình (Split-screen) có thể điều chỉnh độ rộng (Draggable Divider).

*   **Top App Bar (Thanh công cụ cố định):**
    *   **Trái:** Icon `Arrow Back` và Tiêu đề bài test (VD: "Cambridge 18 - Reading Test 1").
    *   **Trung tâm (Timer):** Bộ đếm ngược thời gian (`60:00`), chữ đỏ và nhấp nháy khi còn dưới 10 phút.
    *   **Phải:** Huy hiệu Target (7.0) và nút `M3 Filled Button` màu `#1CB0F6` chữ "Submit Test".

*   **Cột Trái - Bài Đọc (Passage Panel):**
    *   Background: Màu xám/vàng cực nhạt (`#FAF9F6` - màu giấy) để giảm mỏi mắt khi đọc lâu.
    *   Typography: Font chữ có chân (Serif) như `Merriweather` hoặc `Georgia`, size `16px`, line-height `1.8` giúp luồng mắt lướt chữ tốt hơn.
    *   **Tính năng Tương tác (Highlight & Note):** 
        *   Khi người dùng bôi đen (select) một đoạn text, một `M3 Floating Toolbar` (Menu nổi) xuất hiện chứa các tùy chọn: Bút dạ (Vàng, Xanh, Hồng) để Highlight, và icon Cuốn sổ để "Lưu từ vựng này vào Sổ tay" (Save to Notebook).

*   **Cột Phải - Bảng Câu Hỏi (Question Panel):**
    *   Background: Màu Trắng tinh (`#FFFFFF`).
    *   Sử dụng các thẻ `M3 Outlined Card` để bọc từng cụm câu hỏi (VD: Card 1 cho câu 1-5 dạng True/False/Not Given, Card 2 cho câu 6-10 dạng Fill in the blanks).

## **2. Các Component Câu hỏi Đặc thù**
*   **Dạng Multiple Choice / T/F/NG:** Sử dụng `M3 Radio Button` kèm Text label. Khi chọn, vùng background của đáp án đó đổi màu xanh nhạt (`#E1F5FE`).
*   **Dạng Điền từ (Fill in the blanks):** Sử dụng các ô `M3 Outlined Text Field` siêu nhỏ nhúng trực tiếp vào trong đoạn văn bản (Inline input).
*   **Dạng Nối tiêu đề (Matching Headings):** Tính năng kéo thả (Drag and Drop). Các tiêu đề nằm ở trên cùng dạng `M3 Chip`, người dùng kéo thả vào các ô trống cạnh các đoạn văn A, B, C.

## **3. Giao diện Chữa bài (Post-Submission State)**
*   Bảng câu hỏi bên phải hiển thị chấm xanh (Đúng) và chữ thập đỏ (Sai) cạnh mỗi câu.
*   **Location Highlight (Cực kỳ quan trọng):** Khi click vào nút "Xem lời giải" ở một câu bất kỳ, màn hình bên trái (Passage Panel) sẽ tự động cuộn (auto-scroll) đến đúng đoạn văn chứa đáp án và bôi nền màu vàng (`#FFF59D`) đoạn text đó để người dùng đối chiếu.
