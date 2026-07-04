# **Design Specification: letsgoIELTS Listening Room**
Tài liệu đặc tả chi tiết giao diện Phòng Luyện Nghe (Listening Room) của hệ thống **letsgoIELTS**, lấy trung tâm là trình phát đa phương tiện (Media Player) và đồng bộ hóa thời gian thực (Real-time Sync).

## **1. Cấu trúc Bố cục Tổng thể (Focused Centered Layout)**
Sử dụng thiết kế một cột tập trung ở giữa (Max-width: `800px`), bao quanh là màu nền xám nhạt (`#F8F9FA`) để tạo sự tập trung tuyệt đối.

*   **Sticky Audio Player (Trình phát âm thanh cố định):**
    *   Được neo cố định (Sticky) ở đỉnh màn hình, luôn hiển thị kể cả khi người dùng cuộn chuột đọc câu hỏi.
    *   **Component:** Một `M3 Elevated Card` hình chữ nhật nằm ngang.
    *   **Tính năng:** Nút Play/Pause lớn ở giữa, thanh cuộn tiến trình (Audio Progress Bar) màu Primary `#1CB0F6`. 
    *   **Speed Control (Chỉnh tốc độ):** Một menu Dropdown nhỏ ở góc phải cho phép chọn tốc độ `1.0x`, `1.25x`, `1.5x`.
    *   **Giới hạn:** Thanh tiến trình có thể bị khóa (không cho tua ngược/tiến) nếu đang trong chế độ "Thi thật" (Mock Test Mode).

*   **Phần Nội dung Câu hỏi (Question Area):**
    *   Tương tự phần Reading, sử dụng `M3 Outlined Card` bọc từng Section (Section 1, 2, 3, 4).
    *   Hỗ trợ tương tác bằng phím Tab để nhảy nhanh giữa các ô điền từ (đặc biệt quan trọng cho Listening).

## **2. Giao diện Chấm chữa & Transcript (Post-Submission State)**
Trang kết quả của Listening là một bản giao hưởng giữa âm thanh và văn bản (Interactive Transcript).

*   **Chế độ Karaoke-style Transcript:**
    *   Dưới trình phát Audio sẽ xuất hiện nút "View Transcript".
    *   Khi bật lên, toàn bộ kịch bản bài nghe hiển thị trên màn hình. Khi Audio chạy đến đâu, dòng chữ tương ứng sẽ sáng lên (Highlight chữ màu xanh `#1CB0F6`, làm mờ các câu chưa đọc).
    *   **Gắn thẻ Câu trả lời:** Tại những câu trong Transcript chứa đáp án (ví dụ câu số 5), bên lề phải sẽ có một nhãn (Badge) ghi "Q5" nổi bật. Người dùng click vào thẻ "Q5" này, Audio tự động tua lại đúng 5 giây trước khi đoạn đó bắt đầu.
