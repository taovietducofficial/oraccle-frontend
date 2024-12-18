import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/Cach-gia-han-ho-chieu-Online-3.jpg",
            title: "Gia Hạn Hộ Chiếu Trực Tuyến",
            description: "Giải pháp thuận tiện và nhanh chóng cho việc gia hạn hộ chiếu của bạn. Tiết kiệm thời gian và chi phí đi lại.",
            buttonText: "Đăng Ký Ngay",
            buttonLink: "/services"
        },
        {
            image: "/1.png",
            title: "Quy Trình Đơn Giản",
            description: "Chỉ với 4 bước đơn giản, hoàn thành thủ tục gia hạn. Đội ngũ chuyên viên hỗ trợ tận tình.",
            buttonText: "Xem Quy Trình",
            buttonLink: "/process"
        },
        {
            image: "/Cach-gia-han-ho-chieu-Online-1-1-750x450.jpg",
            title: "Hỗ Trợ 24/7",
            description: "Đội ngũ tư vấn viên chuyên nghiệp luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.",
            buttonText: "Liên Hệ Ngay",
            buttonLink: "/contact"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
            {/* Enhanced Slideshow */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40">
                            <div className="container mx-auto px-4 h-full flex items-center">
                                <div className="text-white max-w-3xl animate-fadeIn">
                                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight animate-slideInLeft">
                                        {slide.title}
                                    </h2>
                                    <p className="text-sm md:text-xl lg:text-2xl mb-5 md:mb-10 leading-relaxed animate-slideInRight">
                                        {slide.description}
                                    </p>
                                    <Link to={slide.buttonLink}>
                                        <button className="bg-blue-600 text-white px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 rounded-full text-sm md:text-lg lg:text-xl font-semibold 
                                            hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 
                                            shadow-lg hover:shadow-2xl animate-bounce">
                                            {slide.buttonText}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 
                        bg-blue-600/0 hover:bg-blue-700/0 text-white
                        p-3 md:p-4 lg:p-6 rounded-full transition-all duration-300 
                        backdrop-blur-sm shadow-lg hover:shadow-xl
                        hover:-translate-x-1 hover:scale-110"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2
                        bg-blue-600/0 hover:bg-blue-700/0 text-white
                        p-3 md:p-4 lg:p-6 rounded-full transition-all duration-300
                        backdrop-blur-sm shadow-lg hover:shadow-xl
                        hover:translate-x-1 hover:scale-110"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Enhanced Indicators */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 md:w-4 h-2 md:h-4 rounded-full transition-all duration-300 
                                ${index === currentSlide
                                    ? 'bg-blue-600 w-6 md:w-12'
                                    : 'bg-white/50 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 md:py-12">
                {/* Hero Section */}
                <section className="bg-white rounded-xl shadow-2xl p-6 md:p-10 mb-8 md:mb-12 transform hover:scale-[1.02] transition-transform">
                    <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">Dịch Vụ Gia Hạn Hộ Chiếu</h1>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        Chào mừng đến với dịch vụ gia hạn hộ chiếu trực tuyến. Chúng tôi cung cấp giải pháp thuận tiện và nhanh chóng cho việc gia hạn hộ chiếu của bạn.
                    </p>
                    <Link to="/services">
                        <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg">
                            Bắt Đầu Ngay
                        </button>
                    </Link>
                </section>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-3xl md:text-4xl mb-3 md:mb-4">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Nhanh Chóng</h3>
                        <p className="text-gray-600 text-base md:text-lg">Quy trình gia hạn đơn giản, tiết kiệm thời gian của bạn</p>
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-3xl md:text-4xl mb-3 md:mb-4">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">An Toàn</h3>
                        <p className="text-gray-600 text-base md:text-lg">Bảo mật thông tin cá nhân tuyệt đối</p>
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-3xl md:text-4xl mb-3 md:mb-4">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Tiện Lợi</h3>
                        <p className="text-gray-600 text-base md:text-lg">Thực hiện mọi lúc, mọi nơi</p>
                    </div>
                </div>

                {/* Process Steps */}
                <section className="mt-8 md:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Quy Trình Gia Hạn</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-3 md:mb-4">1</div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Điền Thông Tin</h4>
                            <p className="text-gray-600 text-sm md:text-base">Cung cấp thông tin cá nhân và hộ chiếu một cách đơn giản</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-3 md:mb-4">2</div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Tải Tài Liệu</h4>
                            <p className="text-gray-600 text-sm md:text-base">Upload các giấy tờ cần thiết theo hướng dẫn</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-3 md:mb-4">3</div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Thanh Toán</h4>
                            <p className="text-gray-600 text-sm md:text-base">Thực hiện thanh toán phí gia hạn an toàn</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-3 md:mb-4">4</div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Hoàn Tất</h4>
                            <p className="text-gray-600 text-sm md:text-base">Nhận thông báo và theo dõi tiến độ trực tuyến</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
