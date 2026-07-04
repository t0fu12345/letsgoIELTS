# **Design Specification: letsgoIELTS Speaking Room**
Tài liệu đặc tả chi tiết giao diện Phòng Luyện Nói (Speaking Room) của hệ thống **letsgoIELTS**. Không gian này mô phỏng phòng thi 1-1, tối giản hoàn toàn các nút bấm không cần thiết để học viên tập trung giao tiếp.

## **1. Cấu trúc Bố cục & Visual (Interactive AI Interviewer)**
Thiết kế mang phong cách của một cuộc gọi Video/Voice Call với Trợ lý AI.

*   **Không gian Hình ảnh (Visual Centerpiece):**
    *   Nằm chính giữa màn hình là một khối đồ họa sinh động: Có thể là một Avatar AI 3D đơn giản, hoặc nghệ thuật hơn là một **Vòng tròn Sóng âm (Circular Audio Waveform)**.
    *   Khi AI (Giám khảo) đang đọc câu hỏi, vòng sóng âm chuyển động theo giọng nói của AI (Màu Primary `#1CB0F6`).
    *   Khi AI dừng lại chờ học viên trả lời, vòng sóng âm chuyển sang trạng thái chờ (Pulse effect).

*   **Phần Văn bản (Subtitle Panel):**
    *   Nằm ngay dưới khối Visual. Hiển thị dạng phụ đề (Subtitles) câu hỏi mà AI vừa đọc (Ví dụ: "Part 1: Let's talk about your hometown..."). Font chữ to, rõ ràng (`24px`).

## **2. Bảng điều khiển Ghi âm (Recording Controls)**
Khu vực thao tác đặt ở đáy màn hình.

*   **Nút Bấm Trọng tâm (The Record FAB):**
    *   Sử dụng `M3 Floating Action Button (FAB)` kích thước siêu lớn (Mega size: `80px x 80px`).
    *   Trạng thái Mặc định: Nền Trắng, viền Đỏ, Icon Micro màu Đỏ.
    *   Trạng thái Đang Ghi âm (Recording): Nút thu nhỏ thành hình vuông (biểu tượng Stop) màu Đỏ đậm (`#B3261E`). Cung quanh nút xuất hiện dải sóng âm (Linear Waveform) nảy theo cường độ giọng nói của học viên để đảm bảo Micro đang hoạt động.
*   **Trạng thái AI Phân tích (Processing State):**
    *   Sau khi nộp bài, màn hình xuất hiện hiệu ứng M3 Linear Progress Identifier kèm thông báo động *"AI is analyzing your pronunciation and fluency..."*

## **3. Giao diện Đánh giá Chuyên sâu (AI Speech Assessment)**
*   **Bảng Phân tích Phát âm (Pronunciation Transcript):**
    *   Hiển thị toàn bộ câu trả lời của học viên đã được Speech-to-Text chuyển hóa thành chữ.
    *   **Color-coded Feedback:** Từng từ vựng được tô màu: 
        *   Màu Đen: Đọc chuẩn.
        *   Màu Xanh lá (`#14AE5C`): Từ vựng/Cấu trúc idiom ăn điểm (Band cao).
        *   Màu Đỏ (`#B3261E`): Lỗi phát âm. 
        *   *Tương tác:* Click vào từ màu Đỏ, popup sẽ hiện ra phiên âm IPA đúng và có nút loa nhỏ để nghe giọng người bản xứ đọc từ đó.
*   **Hệ thống Chỉ số (Metrics Dashboard):**
    *   Hiển thị 4 thanh `M3 Linear Progress` cho các yếu tố: Độ trôi chảy (Fluency), Tốc độ nói (Words per minute), Từ vựng (Lexical Resource), và Ngữ pháp (Grammatical Range).
