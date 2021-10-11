const app = {
    cars: [
        {
            dongxe: "DÒNG SUV",
            slogan: "CÙNG BẠN BỨT PHÁ" + "<br>" + "MỌI GIỚI HẠN",
            name: "VF e34",
            descs: ['Ô tô điện thông minh khởi tạo tương lai di chuyển xanh' , 
                'Hệ thống pin tiên tiến, chính sách thuê pin độc đáo' , 
                'Chi phí vận hành, bảo dưỡng rẻ hơn xe xăng'
            ],
            logo: './assets/img/vinfast-data-01/bg-title-car.png',
            img: "./assets/img/vinfast-data-01/VFe34_1624348575.webp"
        },
        {
            dongxe: "DÒNG SUV",
            slogan: "CHINH PHỤC MỌI " + "<br>" + "CON ĐƯỜNG",
            name: "LUX SA2.0",
            descs: ['Thiết kế sang trọng, mạnh mẽ' , 
                'Hệ dẫn động 4 bánh toàn thời gian cho cảm giác lái đầm chắc mà êm ái' , 
                'Khung gầm liền khối vững chắc chuẩn châu Âu tối ưu' ,
                'Chuẩn an toàn cao nhất 5 sao ASEAB NCAP'
            ],
            logo: './assets/img/vinfast-data-01/bg-title-car.png',
            img: "./assets/img/vinfast-data-01/LuxSA_1624348590.webp"
        },
        {
            dongxe: "DÒNG SEDAN",
            slogan: "TẬN HƯỞNG TỪNG" + "<br>" + " KHOẢNH KHẮC",
            name: "LUX A2.0",
            descs: ['Thiết hế sang trọng, tính tế' , 
                'Động cơ tăng áp mạnh mẽ' , 
                'Hệ dẫn động cầu sau và hệ thống treo độc lâp cho cảm giác lái thể thao' ,
                'Chuẩn an toàn cao nhất 5 sao ASEAB NCAP'
            ],
            logo: './assets/img/vinfast-data-01/bg-title-car.png',
            img: "./assets/img/vinfast-data-01/LuxA_1624348606.webp"
        },
        {
            dongxe: "DÒNG HATCHBACK",
            slogan: "TỐI ƯU " + "<br>" + "MỌI TRẢI NGHIỆM",
            name: "FADIL",
            descs: ['Xe đô thị cỡ nhỏ hoàn hảo' , 
                'Khả năng vận hành mạnh mẽ dẫn đầu phân khúc' , 
                'Hệ thống giải trí và kết nối hiện đại' ,
                'Chuẩn an toàn cao nhất 4 sao ASEAB NCAP'
            ],
            logo: './assets/img/vinfast-data-01/bg-title-car.png',
            img: "./assets/img/vinfast-data-01/Fadil_1624348615.webp"
        },
        {
            dongxe: "DÒNG SUV",
            slogan: "DẤU ẤN " + "<br>" + "NGƯỜI THỦ LĨNH",
            name: "PRESIDENT",
            descs: ['Lời khẳng định về năng lực sản xuất ô tô của VinFast' , 
                'Phiên bản giới hạn 500 chiếc trên toàn thế giới' , 
                'Thiết kế uy lực đầy kiêu hãnh, tôn dấu ấn tinh hoa của chủ nhân' ,
                'Khả năng vận hành vượt trội với động cơ V8 6,2L mạnh mẽ bậc nhất thế giới'
            ],
            logo: './assets/img/vinfast-data-01/bg-title-car.png',
            img: "./assets/img/vinfast-data-01/president.webp"
        }
    ],
    motorbikes: [
        {
            img: "./assets/img/vinfast-data-01/Theon_1624348475.webp",
            name: "THEON",
            slogan: "CÙNG BẠN BỨT PHÁ" + "<br>" + "TRẢI NGHIỆM ĐỈNH CAO",
            descs: ['Vận hành mạnh mẽ, vận tốc lên tới 90 km/h' , 
                'Hệ thống phanh ABS 2 kênh, chuẩn chống nước IP67' , 
                'Công nghệ bứt phá với hệ thống PAAK, smart key, tích hợp eSIM' ,
                'Công nghệ pin Lithium tiên tiến'
            ]
        },
        {
            img: "./assets/img/vinfast-data-01/Feliz_1624348483.webp",
            name: "FELIZ",
            slogan: "SỐNG XANH THANH LỊCH",
            descs: ['Thiết kế thời thượng' , 
                'Vận hành êm ái, hai chế độ lái Eco và Sport linh hoạt' , 
                'Vận tốc tối đa 60 km/h, quãng đường lên tới 90 km' ,
                'Cốp xe rộng tới 20 lít, tiêu chuẩn chống nước IP67'
            ]
        },
        {
            img: "./assets/img/vinfast-data-01/KlaraS_1624348494.webp",
            name: "KLARA S",
            slogan: "KHỞI ĐẦU PHONG CÁCH MỚI",
            descs: ['Thiết kế sang trọng, tôn vinh vóc dáng Việt' , 
                'Vận hành mạnh mẽ, quãng đường di chuyển tới 120 km' , 
                'Công nghệ thông minh tích hợp eSIM' ,
                'Tiêu chuẩn chống nước IP57'
            ]
        },
        {
            img: "./assets/img/vinfast-data-01/Impes_1624348519.webp",
            name: "IMPES",
            slogan: "TOẢ CHẤT RIÊNG - BẬT CÁ TÍNH",
            descs: ['Thiết kế thể thao và cá tính' , 
                'Tính năng thông minh vượt trội' , 
                'Vận hành mạnh mẽ, vận tốc lên tới 49 km/h' ,
                'Công nghệ pin Lithium bền bỉ, tiêu chuẩn chống nước IP57'
            ]
        },
        {
            img: "./assets/img/vinfast-data-01/Ludo_1624348528.webp",
            name: "LUDO",
            slogan: "DÁNG SÀNH ĐIỆU, KIỂU CHẤT CHƠI",
            descs: ['Thiết kế sành điệu' , 
                'Tính năng thông minh vượt trội' , 
                'Vận hành êm ái, quãng đường di chuyển lên tới 70 km' ,
                'Công nghệ pin Lithium bền bỉ, tiêu chuẩn chống nước IP57'
            ]
        },
    ],
    renderBlock3: function () {
        var swiperSlideBlock3 = document.querySelector('.block3 .row');
        const html3s = this.cars.map((car, index) => {            
            return `
                    <div class="l-3 m-6 c-12 swiper-slide">
                        <div class="info-body-car info-body-header">
                            <div class="dongxe">${car.dongxe}</div>
                            <div class="slogan">${car.slogan}</div>
                            <div class="name">${car.name}</div>
                        </div>
                        <img src="${car.logo}" alt="" class="swiper-lazy">
                        <div class="info-body-car">
                            <div class="desc">${car.descs[0]}</div>
                            <div class="desc">${car.descs[1]}</div>
                            <div class="desc">${car.descs[2]}</div>
                            <div class="desc">${car.descs[3]}</div>  
                        </div>
                        <div class="lien_ket">
                            Chi tiết
                            <img class="swiper-lazy swiper-lazy-loaded" src="./assets/img/vinfast/logo_gray.svg" alt="">
                        </div>
                        <div>
                            <img src="${car.img}" alt="" class="swiper-lazy">
                        </div>
                    </div>
                `;
        });
        swiperSlideBlock3.innerHTML = html3s.join("");
    },
    renderBlock4 : function() {
        var swiperSlideBlock4 = document.querySelector('.block4 .row');
        const html4s = this.motorbikes.map((motorbike, index) => {
            return `
                    <div class="l-3 m-6 c-12 swiper-slide">
                        <div class="img">
                            <img src="${motorbike.img}" alt="" class="swiper-lazy">
                        </div>
                        <div class="info-motorbike">
                            <div class="name">${motorbike.name}</div>
                            <div class="slogan">${motorbike.slogan}</div>
                            <div class="body">
                                <div class="desc">${motorbike.descs[0]}</div>
                                <div class="desc">${motorbike.descs[1]}</div>
                                <div class="desc">${motorbike.descs[2]}</div>
                                <div class="desc">${motorbike.descs[3]}</div>  
                            </div>
                        </div>
                    </div>
                `;
        });
        swiperSlideBlock4.innerHTML = html4s.join("");
    }

}

app.renderBlock3();
app.renderBlock4();

const infos = document.querySelectorAll('.info-body-car .desc')
for(let i = 0; i < infos.length; i++) {
    if (infos[i].innerHTML === 'undefined') {
        infos[i].remove();
    }
}