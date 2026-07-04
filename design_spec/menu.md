# **Design Specification: letsgoIELTS Landing Page**
Tài liệu đặc tả chi tiết giao diện trang chủ hệ thống luyện thi IELTS 4 kỹ năng **letsgoIELTS**, chuẩn hóa theo Material Design 3 (M3).[cite: 2]

## **1. Hệ thống Màu sắc & Trực quan (M3 Theme)**
| Thành phần | Mã Màu Hex | Vai trò & Áp dụng |
| :--- | :--- | :--- |
| **Primary** | `#1CB0F6` | Xanh dương sáng (Màu chủ đạo, nút bấm chính, thanh điều hướng).[cite: 2] |
| **Secondary** | `#F3C41B` | Vàng rực rỡ (Dùng làm nền Footer).[cite: 2] |
| **Secondary Dark** | `#DCAA00` | Vàng đậm (Dùng cho các số Watermark tràn viền để nổi bật hơn trên nền trắng xám). |
| **Surface / Background** | `#FFFFFF` / `#F8F9FA` | Màu nền chính và màu phân tách các khối nội dung.[cite: 2] |
| **On-Surface** | `#1A1A1A` | Màu chữ chính (Xám đen đậm, đảm bảo độ tương phản cao).[cite: 2] |

## **2. Cấu trúc Giao diện (Layout & Components)**

### **2.1. Header / Navigation Bar (Sticky App Bar)**
*   **Cấu trúc:** Chiều cao cố định `64px`, đổ bóng nhẹ (`elevation: 1`).[cite: 2]
*   **Menu trái:** Trang chủ, Khóa học, Thư viện, Sự kiện, Liên hệ (`Gap: 24px`).[cite: 2]
*   **Tìm kiếm:** M3 Search Bar tích hợp ở vị trí trung tâm phải kèm Icon kính lúp.[cite: 2]
*   **Tài khoản:** Nút Đăng nhập (Text Button) và Nút Đăng ký (Filled Button).[cite: 2]

### **2.2. Hero Section - Khối Nhận diện Trung tâm (Perfect Morphing Animation)**
*   Khối chữ khổng lồ đặt chính giữa màn hình đầu tiên, size `84px`, `font-weight: 900`.[cite: 2]
*   **Cơ chế đồng bộ vị trí tuyệt đối (No Alignment Shift):** Toàn bộ cụm từ `letsgoIELTS` được xếp sẵn trên một hàng cố định bằng Flexbox ngay từ đầu. Các ký tự xuất hiện/ẩn theo mốc thời gian để tránh giật khung hình.[cite: 2]
*   **Sequential Uppercasing (Viết hoa tuần tự):** Trong quá trình các ký tự `l`, `e`, và `t` dịch chuyển khỏi chữ `lets` ban đầu để định hình phần khung cơ sở cho từ `IELTS`, chúng sẽ đồng thời trải qua hiệu ứng biến đổi mượt mà từ chữ thường (lowercase) sang chữ IN HOA (UPPERCASE) theo một trình tự liên tiếp.
*   **Ordered Arrival (Thứ tự xuất hiện chuẩn xác):** Thời gian của hiệu ứng (animation timing) đã được tinh chỉnh nghiêm ngặt để các chữ cái `E`, `L`, và `T` di chuyển vào đúng vị trí tọa độ trước tiên. Ngay sau đó là màn xuất hiện đầy kịch tính (dramatic entry) của chữ `I` vút từ trên xuống và chữ `S` vút từ dưới lên để hoàn thiện toàn bộ tên thương hiệu.
*   Ngay bên dưới khối Logo, bổ sung thêm một khối **Quote Card** viền mờ chứa thông điệp *"Mastering IELTS is not a destination, it's a journey. Let's go together!"* cùng hai nút Call-to-Action: "START LEARNING FREE" và "EXPLORE COURSES".

### **2.3. Body Section - Danh sách Tính năng (Intentional Overflow Styling)**
Hệ thống thẻ lưới hiển thị các tính năng nổi bật.[cite: 2]

**ĐẶC TẢ XỬ LÝ TRÀN VIỀN NGHỆ THUẬT (OUT-OF-BOX OVERFLOW):**
Các con số chỉ mục cố tình được thiết kế tràn ra ngoài góc phải trên cùng của thẻ để tạo chiều sâu và phá vỡ bố cục đóng hộp nhàm chán (hiệu ứng xếp chồng 3D).
*   **Card Container (Khung chứa thẻ):** Bắt buộc **KHÔNG** dùng `overflow: hidden;`. Phải set `position: relative;` và `overflow: visible;` để cho phép các phần tử con vượt ra ngoài ranh giới thẻ.
*   **Watermark Number (Số trang trí tràn viền):** 
    *   **Nội dung tuần tự:** `01`, `02`, `03`, `04`.
    *   **Màu sắc:** Sử dụng màu **Secondary Dark** (`#DCAA00` - Vàng đậm) để chữ sắc nét và nổi bật hơn.
    *   **Kích thước & Định vị:** Dùng font chữ cực lớn, siêu đậm (`font-size: 80px; font-weight: 900`). Gán `position: absolute;`, neo lồi lên góc trên bên phải (`top: -35px; right: -15px;`) để một nửa con số bay ra khỏi thẻ.
    *   **Tương tác:** Cần có `z-index: 0;` (nằm dưới nội dung chính của thẻ) và `pointer-events: none;` để không làm chặn thao tác click chuột của người dùng.
    *   **Animation** Vì trang dài nên khi kéo xuống sẽ có animate raise lần lượt cho các card 1 2 3 4.

**Nội dung các thẻ tính năng:**
*   **Tính năng 1:** Số tràn viền **`01`** - Icon: Clipboard - Nội dung: Free IELTS Test[cite: 2]
*   **Tính năng 2:** Số tràn viền **`02`** - Icon: Head/AI - Nội dung: Lộ trình học IELTS tối ưu bằng AI[cite: 2]
*   **Tính năng 3:** Số tràn viền **`03`** - Icon: Voice - Nội dung: Luyện nói & sửa lỗi trực tiếp với AI[cite: 2]
*   **Tính năng 4:** Số tràn viền **`04`** - Icon: Graduation Cap - Nội dung: Phòng thi thử ảo chấm điểm ngay[cite: 2]

### **2.4. Body Section - Why students trust letsgoIELTS**
*   **Bố cục 2 cột (Split Layout):** 
    *   **Cột trái:** Hình ảnh thực tế của nhóm học viên và giáo viên đang học tập (Bo góc `16px`, có đổ bóng nhẹ `shadow-md`).
    *   **Cột phải:** Tiêu đề lớn "Why students trust letsgoIELTS". Bên dưới là danh sách các giá trị cốt lõi đi kèm icon màu sắc tương ứng.
        *   *98% Success Rate* (Icon màu xanh).
        *   *AI-Powered Correction* (Icon màu vàng).
        *   *Expert Mentorship* (Icon màu xám).

### **2.5. Footer (Chân trang)**
Nền màu vàng rực `#F3C41B` phủ toàn màn ngang, chữ và icon phối màu đen/trắng đối lập.[cite: 2]
*   **Cột 1 (Thương hiệu):** Logo `letsgoIELTS` + Logo phụ "the IELTS workshop" (chữ i cách điệu), kèm theo một đoạn text ngắn "Empowering the next generation...".[cite: 2] Mạng xã hội: Nút icon vuông bo góc chứa logo Facebook, Instagram, YouTube và Điện thoại viền đen mảnh.[cite: 2]
*   **Cột 2 (About Us):** Liên kết Privacy Policy, Terms of Service, Cookie Policy, Careers.[cite: 2]
*   **Cột 3 (Contact):** Hiển thị Email và Địa chỉ, kèm theo một form "Subscribe to our newsletter" với ô nhập email và nút "JOIN" màu đen. 
*   **Copyright:** `© 2026 letsgoIELTS - the IELTS workshop` căn giữa ở đáy trang.