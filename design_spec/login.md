# **Design Specification: letsgoIELTS Login Page**

## **1. Chiến lược Bố cục (Split-Screen Layout)**
Trang Đăng nhập sử dụng thiết kế tràn viền (100vh), chia màn hình thành 2 nửa (Left Brand Column & Right Form Column).

### **Cột Trái: Không gian Thương hiệu (Brand & Motivation)**
*   **Background Container:** Phủ toàn bộ bằng màu Primary (`#1CB0F6`) nguyên khối.
*   **Nội dung trung tâm:** 
    *   **Logo:** `letsgoIELTS` màu trắng (`#FFFFFF`) đặt ở góc trái trên cùng.
    *   **[UPDATE] Hình minh họa (Raster Image with CSS Blending):**
        *   **Cấu trúc HTML:** Cho phép sử dụng thẻ `<img>` để gọi trực tiếp file đồ họa chất lượng cao (hình học viên nam đang ngồi laptop).
        *   **Xử lý hòa nền (Blend Mode Magic):** Bắt buộc phải áp dụng đoạn CSS sau vào thẻ `<img>` để triệt tiêu hoàn toàn mảng nền caro giả (checkerboard) và mảng trắng:
            ```css
            .illustration-blend {
                mix-blend-mode: multiply; /* Triệt tiêu mảng sáng/trắng, giữ lại nét vẽ tối */
                filter: contrast(1.1); /* Tăng độ sắc nét của hình vẽ sau khi blend */
                background-color: transparent !important;
                border: none !important;
                box-shadow: none !important;
            }
            ```
        *   **Hiệu ứng thị giác:** Nhân vật sẽ như được in lưới (screen-printed) thẳng lên mặt phẳng màu xanh `#1CB0F6` một cách hoàn hảo, không còn bất kỳ viền hộp nào.
    *   **Quote:** *"Welcome back! Your IELTS journey awaits."* (Font: 24px, Medium, màu Trắng, căn giữa bên dưới hình minh họa).

### **Cột Phải: Khu vực Tương tác (The Login Form)**
*(Giữ nguyên các thành phần M3: Welcome Back, Email, Password, Checkbox, Nút Sign In màu `#1CB0F6`, Social Logins).*