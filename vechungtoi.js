function showContent(section) {
    let contentText = '';

    switch (section) {
        case 'about-restaurant':
            contentText = `
                <h3>Giới thiệu Quán</h3>
                <p>Quán trà sữa "Trở về tuổi thơ" ra đời với sứ mệnh mang lại những khoảnh khắc hoài niệm về tuổi thơ trong từng ly trà sữa thơm ngon.</p>
                <p>Với không gian ấm cúng, trang trí gần gũi và thân thiện, quán đưa thực khách trở về những ngày tháng tuổi thơ tươi đẹp, khi mà mọi thứ đều đơn giản, hồn nhiên và tràn đầy niềm vui.</p>
                <p>Tại đây, chúng tôi không chỉ phục vụ những ly trà sữa truyền thống được làm từ nguyên liệu tươi ngon và an toàn, mà còn kết hợp các loại topping đặc biệt để tạo nên hương vị độc đáo, khó quên.</p>
                <p>Chúng tôi tự hào sử dụng trà xanh nguyên chất được thu hoạch từ các vùng đồi chè nổi tiếng của Đài Loan, Nhật Bản, kết hợp với sữa tươi thượng hạng để tạo nên hương vị tinh tế, thanh mát. Bên cạnh các loại trà sữa, quán còn cung cấp nhiều loại thức uống sáng tạo như trà trái cây, nước ép tươi và các món ăn vặt quen thuộc, mang đậm hương vị tuổi thơ như bánh tráng trộn, xoài lắc, khô bò, giúp thực khách có những trải nghiệm đa dạng và phong phú khi ghé thăm quán.</p>
                <p>Với phong cách phục vụ chuyên nghiệp, tận tình, chúng tôi cam kết mang đến cho khách hàng không chỉ là những thức uống chất lượng mà còn là những khoảnh khắc đáng nhớ cùng bạn bè và gia đình.</p>
                <p>"Trở về tuổi thơ" không chỉ là quán trà sữa, mà còn là nơi lưu giữ và khơi dậy những kỷ niệm đẹp của tuổi thơ trong mỗi chúng ta. Hãy đến với "Trở về tuổi thơ", nơi mà mỗi ly trà sữa là một chuyến hành trình về quá khứ, gợi nhớ những ký ức êm đềm, ngọt ngào và những nụ cười hồn nhiên. Chúng tôi luôn chào đón bạn tại không gian ấm cúng và gần gũi của quán, nơi mà sự thư giãn và niềm vui luôn là ưu tiên hàng đầu.</p>
            `;
            break;
        case 'terms':
            contentText = `
                <h3>Điều khoản sử dụng</h3>
                <p>Chào mừng quý khách đến với hệ thống dịch vụ của chúng tôi. Khi sử dụng các dịch vụ, trang web và ứng dụng của chúng tôi, quý khách đồng ý tuân thủ các điều khoản và điều kiện sau đây. Chúng tôi khuyến khích quý khách đọc kỹ để hiểu rõ quyền lợi và trách nhiệm của mình khi sử dụng dịch vụ.</p>
                <p><strong>Chấp nhận điều khoản:</strong> Bằng việc truy cập và sử dụng trang web của chúng tôi, quý khách đồng ý tuân theo các điều khoản, chính sách và điều kiện được quy định tại đây. Nếu quý khách không đồng ý với bất kỳ điều khoản nào, xin vui lòng ngừng việc sử dụng dịch vụ ngay lập tức.</p>
                <p><strong>Sử dụng dịch vụ:</strong> Quý khách có thể truy cập và sử dụng các dịch vụ của chúng tôi với mục đích cá nhân và phi thương mại. Việc sử dụng dịch vụ nhằm mục đích thương mại hoặc vi phạm pháp luật là nghiêm cấm. Quý khách cam kết không sao chép, tái tạo, phân phối hoặc sử dụng bất kỳ nội dung nào từ trang web mà không có sự đồng ý bằng văn bản từ phía chúng tôi.</p>
            `;
            break;
        case 'privacy-policy':
            contentText = `
                <h3>Chính sách bảo mật</h3>
                <p><strong>Chính sách bảo mật:</strong> Chúng tôi cam kết bảo vệ sự riêng tư và bảo mật thông tin cá nhân của quý khách khi sử dụng dịch vụ và trang web của chúng tôi. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, và bảo vệ thông tin cá nhân của quý khách.</p>
                <p><strong>Thông tin chúng tôi thu thập:</strong> Khi quý khách sử dụng dịch vụ của chúng tôi, chúng tôi có thể thu thập các thông tin cá nhân như tên, địa chỉ email, số điện thoại, và thông tin liên quan đến giao dịch. Chúng tôi thu thập thông tin này để cung cấp dịch vụ tốt hơn và đáp ứng nhu cầu của quý khách.</p>
            `;
            break;
        default:
            contentText = '<p>Vui lòng chọn một mục để xem chi tiết.</p>';
    }

    document.getElementById('content-text').innerHTML = contentText;
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.about-sidebar ul li');
    
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            const section = this.dataset.section;
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            showContent(section);
        });
    });
});
