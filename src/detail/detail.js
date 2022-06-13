import data from '../../db.json' assert {type: 'json'}

const urlParams = new URLSearchParams(location.search);

const id = urlParams.get('id')

let book = data.filter(function(book) {
    return book.id == id
})

console.log(book)
book = book[0]

const contentElement = document.querySelector('#content')
const category = book.categories.name;
const _content = /*html*/`
    <div class="w-11/12 mx-auto md:container">
    <div class="flex justify-between md:hidden">
        <div>
            <a href="../index.html">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 rounded-[50%] bg-[#F5F5FA] p-1 text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" onclick="history.back()"/>
            </svg>
            </a>
        </div>
        <div class="flex gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 rounded-[50%] bg-[#F5F5FA] p-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 rounded-[50%] bg-[#F5F5FA] p-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div>
    </div>
        <div class="flex md:space-x-3 flex-col md:flex-row mt-2 md:m-0">
        <div class="md:w-1/3 flex-none">
            <img src="${book.images[0].base_url}" class="">
            <div class="grid grid-cols-5 gap-3 mt-3">
                ${book.images.map(function(image) {
                    return `<img src="${image.base_url}" alt="" class="h-full object-cover">`
                }).join('')}
            </div>
        </div>
        <div class="grow">
            <p>Tác giả : <span class="text-[#0D5CB6]">${book.authors && book.authors[0]?.name}</span></p>
            <h3 class="text-[25px]">${book.name}</h3>
            <div class="flex gap-x-3">
                <p>⭐⭐⭐⭐⭐</p>
                <p class="text-[#787878]">Xem ${book.categories?.id} đánh giá</p>
                <p class="text-[#787878]">${book.quantity_sold?.text}</p>
            </div>
            <div class="flex md:space-x-2 md:mt-7 flex-col md:flex-row">
                    <div class="md:w-3/5 flex-none">
                        <span class="text-[28px] text-red-500">
                        ${book.current_seller.price}
                        <span class="underline text-red-500 text-[28px]">đ</span>
                        </span>
                        <span class="text-[#787878] ml-2">${book.list_price}
                        <span class="underline text-[#787878]">đ</span>
                        </span>
                        <div class="bg-[#C6BCF8] flex w-[290px] h-auto gap-x-2 items-center rounded-sm mt-2">
                            <img src="../images/star-shape.png" alt="" class="object-cover w-[13px] h-[16px] ml-1">
                            <p class="text-[#402DA1]">Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</p>
                        </div>
                        <div class="mt-7 border rounded-lg shadow-md py-3 pl-2">
                            <h3 class="md:text-[20px] text-[14px]">15 Mã Giảm Giá</h3>
                            <div class="mt-3 flex gap-x-3">
                                <button class="border border-blue-500 p-2 rounded-lg text-[14px] md:text-lg">Giảm 10k</button>
                                <button class="border border-blue-500 p-2 rounded-lg text-[14px] md:text-lg">Giảm 20k</button>
                                <button class="border border-blue-500 p-2 rounded-lg text-[14px] md:text-lg">Giảm 50k</button>
                                <img src="../images/next.png" alt="" class="object-cover">
                            </div>
                        </div>
                        <div class="mt-4">
                            <h3 class="mt-3">Giao đến
                            Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội -
                            <a class="text-[#0B74E5]">Đổi địa chỉ</a></h3>
                            <div class="grid grid-cols-2 gap-x-2 mt-3">
                                <div class="border rounded-lg shadow-md py-3 pl-2 flex justify-between flex-col">
                                    <div>
                                        <div class="flex gap-x-2 md:items-center flex-col items-baseline md:flex-row">
                                            <img src="../images/Tikinow.png" alt="" class="w-[49px] h-[14px]">
                                            <span class="text-[#00AB56]">Trước 18:00 hôm nay</span>
                                        </div>
                                        <p>19.000đ</p>
                                    </div>
                                    <div class="md:w-[220px] md:h-[26px] bg-[#C6BCF8] flex gap-x-2 items-center rounded-md">
                                        <img src="../images/star-shape.png" alt="" class="object-cover ml-1">
                                        <span class="text-[#402DA1] text-[13px]">Freeship 100% chỉ với 34 ASA</span>
                                    </div>
                                </div>
                                <div class="border rounded-lg shadow-md py-3 pl-2 flex justify-between flex-col">
                                    <div>
                                        <div class="flex gap-x-2 md:items-center flex-col items-baseline md:flex-row">
                                            <img src="../images/TikiFast.png" alt="" class=" w-[49px] h-[14px]">
                                            <span class="text-[#00AB56]">Ngày mai, trước 23:00</span>
                                        </div>
                                        <p>10.000đ (Freeship 30K đh 149K)</p>
                                    </div>
                                    <div class="md:w-[220px] md:h-[26px] bg-[#C6BCF8] flex gap-x-2 items-center rounded-md">
                                        <img src="../images/star-shape.png" alt="" class="object-cover ml-1">
                                        <span class="text-[#402DA1] text-[13px]">Freeship 100% chỉ với 34 ASA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grow mt-3 md:m-0">
                        <div class="flex gap-x-2">
                            <img src="../images/tikitrading.png" alt="">
                            <div class="">
                                <span>Tiki Trading</span>
                                <img src="../images/official.png" alt="">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 mt-3 gap-x-2">
                            <div class="">
                                <h3 class="text-[24px] text-center">4.6 / 5</h3>
                                <p class="text-center text-[#787878]">4.7tr+</p>
                                <button class="flex items-center gap-x-2 border border-blue-500 p-2 rounded-lg w-full justify-center">
                                <img src="../images/Shop.png" alt="">
                                Xem Shop
                                </button>
                            </div>
                            <div class="">
                                <h3 class="text-[24px] text-center">408k+</h3>
                                <p class="text-center text-[#787878]">Theo dõi</p>
                                <button class="flex items-center gap-x-2 border border-blue-500 p-2 rounded-lg w-full justify-center">
                                <img src="../images/Follow.png" alt="">
                                Theo Dõi
                                </button>
                            </div>
                        </div>
                        <hr class="mt-3">
                        <div class="grid grid-cols-3 gap-2 mt-3">
                            <div class="flex flex-col items-center">
                                <img src="../images/for.png" alt="">
                                <p>Hoàn tiền</p>
                                <p>111%</p>
                                <p>nếu hàng giả</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img src="../images/Like.png" alt="">
                                <p>Mở hộp</p>
                                <p>kiểm tra</p>
                                <p>nhận hàng</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img src="../images/Preview.png" alt="">
                                <p>Đổi trả trong</p>
                                <p>30 ngày</p>
                                <p>nếu sp lỗi</p>
                            </div>            
                        </div>
                        <div class="w-full grid grid-cols-2 mt-8 p-3 border rounded-lg shadow-md">
                            <div class="flex flex-col">
                                <h3 class="text-[18px]">8 nhà bán khác</h3>
                                <p class="text-[#787878]">Giá từ 75.210 ₫</p>
                            </div>
                            <div class="flex items-center justify-center">
                                <button class="border border-blue-500 px-3 py-2 rounded-md ">So Sánh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="text-[24px]">Số lượng</h3>
                    <div class="flex cursor-pointer">
                        <p class="w-[30px] h-[30px] text-center border inline">-</p>
                        <p class="w-[30px] h-[30px] text-center border inline"></p>
                        <p class="w-[30px] h-[30px] text-center border inline">+</p>
                    </div>
                    <button class=" bg-[#FF3945] md:py-3 py-2 md:w-[317px] w-[133px] text-white rounded-lg">Chọn Mua</button>
                </div>
        </div>
        </div>
    </div>
    <div class="w-11/12 mx-auto mt-12 md:container">
    <div class="">
    <div>
        <h3 class="md:text-[22px] font-semibold">Sản phẩm tương tự</h3>
        <div class="grid md:grid-cols-6 gap-3 mt-5 grid-cols-2">
        ${data.filter(function(book) {
            return book.categories.name == category
        }).map(function(book) {
            return /*html*/`
                <div class="grid gap-y-1">
                    <img src="${book.images[0].base_url}">
                    <p>${book.name}</p>
                    <div class="flex items-center gap-x-3">
                        <p class="text-[12px]">⭐⭐⭐⭐⭐</p>
                        <p class="text-[12px] text-[#787878]">${book.quantity_sold?.text}</p>
                    </div>
                    <div class="flex gap-x-2 items-center">
                    <p class="text-red-500">${book.current_seller.price}</p>
                    <p class="underline text-red-500">đ</p>
                    <p class="text-center border-red-500 border px-1 text-[14px] rounded-sm text-red-500">
                        -33%
                    </p>
                    </div>
                    <img src="../images/rehonhoantien.png" alt="">
                </div>
            `
        }).join('')}
        </div>
    </div>
    <div>
    <h3 class="md:text-[22px] mt-5 font-semibold">Thông tin chi tiết</h3>
    </div class="w-5/6 mx-auto md:flex">
    ${book.specifications && book.specifications[0].attributes.map(function(info) {
        return /*html*/`
        <div class="flex">
            <div class="w-2/5 flex-none mt-5">
                <p class="text-sm px-1 md:p-0 md:text-lg ">${info.name}</p>
            </div>
            <div class="grow mt-5">
                <p class="text-sm px-1 md:p-0 md:text-lg ">${info.value}</p>
            </div>
        </div>
        `
    }).join('')}
            <div class="md:mt-12 mt-6">
                <h3 class="md:text-[22px] font-semibold">Mô Tả Sản Phẩm</h3>
                <p class="mt-3 text-sm md:text-lg px-1 md:p-0">
                    ${book.description}
                </p>
                <div class="w-full flex justify-center mt-3">
                    <button class="md:px-12 md:py-3 px-1 rounded-sm text-sm border border-[#189EFF] text-[#189EFF] " id="click-description">Xem thêm nội dung</button>
                </div>
            </div>
            <h3 class="text-[18px] mt-10 md:ml-4">Đánh Giá - Nhận Xét Từ Khách Hàng</h3>
            <div class="md:flex">
                <div class="w-2/5 flex-none md:ml-12 mt-3">
                    <div class="flex items-center gap-x-2">
                        <p class="text-[26px]">4.8</p>
                        <div>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p class="text-[#808089]">${book.categories?.id} Nhận xét</p>
                        </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-y-2">
                        <div class="flex items-center gap-x-4">
                            <p>⭐⭐⭐⭐⭐</p>
                            <div class="bg-[#F5F5FA] w-[138px] h-[6px] rounded-xl">
                                <p class="bg-[#808089] w-[118px] h-[6px] rounded-xl"></p>
                            </div>
                            <p class="text-[#808089] ">2345</p>
                        </div>
                        <div class="flex items-center gap-x-4">
                            <p>⭐⭐⭐⭐⭐</p>
                            <div class="bg-[#F5F5FA] w-[138px] h-[6px] rounded-xl">
                                <p class="bg-[#808089] w-[38px] h-[6px] rounded-xl"></p>
                            </div>
                            <p class="text-[#808089] ">303</p>
                        </div>
                        <div class="flex items-center gap-x-4">
                            <p>⭐⭐⭐⭐⭐</p>
                            <div class="bg-[#F5F5FA] w-[138px] h-[6px] rounded-xl">
                                <p class="bg-[#808089] w-[20px] h-[6px] rounded-xl"></p>
                            </div>
                            <p class="text-[#808089] ">45</p>
                        </div>
                        <div class="flex items-center gap-x-4">
                            <p>⭐⭐⭐⭐⭐</p>
                            <div class="bg-[#F5F5FA] w-[138px] h-[6px] rounded-xl">
                                <p class="bg-[#808089] w-[8px] h-[6px] rounded-xl"></p>
                            </div>
                            <p class="text-[#808089] ">28</p>
                        </div>
                        <div class="flex items-center gap-x-4">
                            <p>⭐⭐⭐⭐⭐</p>
                            <div class="bg-[#F5F5FA] w-[138px] h-[6px] rounded-xl">
                                <p class="bg-[#808089] w-[5px] h-[6px] rounded-xl"></p>
                            </div>
                            <p class="text-[#808089] ">8</p>
                        </div>
                    </div>
                    
                </div>
                <div class="grow">
                    <h3 class="md:ml-3 md:m-0 mt-3">Tất cả hình ảnh (321)</h3>
                    <div class="grid grid-cols-5 gap-3 mt-3">
                        ${book.images.map(function(image) {
                            return `<img src="${image.base_url}" alt="" class="h-full object-cover">`
                        }).join('')}
                    </div>
                    <div class="grid md:grid-cols-7 md:gap-x-3 md:mt-10 mt-3 grid-cols-3 gap-2">
                        <button class="md:text-sm text-[12px] ">Lọc xem theo :</button>
                        <button class="md:text-sm text-[12px] bg-[#F5F5FA] rounded-lg">Mới nhất</button>
                        <button class="md:text-sm text-[12px] bg-[#F5F5FA] rounded-lg">Có hình ảnh</button>
                        <button class="md:text-sm text-[12px] bg-[#F5F5FA] rounded-lg">Đã mua hàng</button>
                        <button class="md:text-sm text-[12px] bg-[#F5F5FA] rounded-lg">5⭐</button>
                        <button class="md:text-sm text-[12px] bg-[#F5F5FA] rounded-lg">4⭐</button>
                        <button class="md:text-sm text-[12px] bg-[#F5F5FA] rounded-lg">3⭐</button>
                    </div>
                    <hr class="mt-12">
                </div> 
                    </div>
                        <div class="md:flex block">
                        <div class="md:w-2/5 md:flex-none md:ml-12 md:m-0 gird grid-cols-2">
                        <div class="flex gap-2 items-center">
                        <div>
                        <div class="flex items-center gap-x-3  md:mt-12 mt-3 ">
                        <img src="../images/Thang-Nguyen.jpg" alt="" class="w-[48px] h-[48px]">
                        <div>
                            <h3 class="md:text-[16px] text-[12px]">Thắng cá chép</h3>
                            <p class="md:text-[12px] text-[#808089] text-[12px]">Đã tham gia 10 năm</p>
                        </div>
                        </div>
                            <div class="flex flex-col mt-3">
                                <div class="flex items-center gap-x-3">
                                    <img src="../images/danhgia.png" alt="">
                                    <p class="text-[#808089] text-[12px] md:text-[12px]">Đã viết:</p>
                                    <p class="md:text-[14px] text-[12px]">Đánh giá</p>
                                </div>
                                <div class="flex items-center gap-x-3">
                                <img src="../images/thich.png" alt="">
                                    <p class="text-[#808089] md:text-[14px] text-[12px]">Đã nhận:</p>
                                    <p class="md:text-[12px] text-[12px]">Lượt cảm ơn</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex md:hidden w-1/2 flex-col-reverse items-center">
                            <div class="flex gap-x-3 flex-col items-center">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p class="text-[12px]">Cực kì hài lòng</p>
                            </div>
                            <div class="flex items-center gap-x-3">
                                <p class="w-[12px] h-[12px] bg-[#00AB56]"></p>
                                <p class="text-[#00AB56] text-[12px]">Đã mua hàng</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="grow">
                        <div class="flex flex-col md:mt-12 mt-6">
                        <div class="md:flex md:flex-col hidden">
                            <div class="flex gap-x-3">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Cực kì hài lòng</p>
                            </div>
                            <div class="flex items-center gap-x-3">
                                <p class="w-[12px] h-[12px] bg-[#00AB56]"></p>
                                <p class="text-[#00AB56]">Đã mua hàng</p>
                            </div>
                        </div>
                        
                        <p class="mt-3 max-w-md mx-auto md:max-w-none md:m-0 px-1 md:p-0">mua nhiều đc tặng Flashcard với bao lì xì, chưa đọc nên chưa biết nội dung hay không nhưng đọc phần gthiệu thấy nội dung ổn, bìa với giấy ok mà có vài cuốn không còn tem bọc sách mới nên xước qtqđ như để cũ lâu lắm r ( nhưng giá cả sale nên ko đòi hỏi nhiều, bn nào quý sách như vàng thì nên cân nhắc) , điểm trừ là đóng gói qúa tệ ,lúc nhận cái kiện hàng mà hết hồn ,nó te tua móp méo bong keo gần như sắp rơi sách ra ngoài r!! khách hàng bỏ tiền ra mua sách chứ ko phải xin ạ nên mong shop cân nhắc cẩn thận khi đóng gói vì mình đọc thấy nhiều bạn nhắc shop vđề này r mong shop cải thiện. Mong shop...</p>
                        <div class="grid grid-cols-5 gap-3 mt-3">
                        ${book.images.map(function(image) {
                            return `<img src="${image.base_url}" alt="" class="h-full object-cover">`
                        }).join('')}
                        </div>
                        <p class="text-[#808089] text-[14px] mt-3">Đánh giá vào 1 tuần trước</p>
                        <div class="mt-5 flex gap-x-4 items-center">
                            <button class="flex items-center gap-x-3 md:border border border-[#189EFF] px-2 py-1 rounded-lg text-[#189EFF]">
                                <img src="../images/Like.png" alt="">
                                Hữu ích (5)
                            </button>
                            <p class="text-[#189EFF]">Bình luận</p>
                        </div>
                        </div>
                        </div>
                    </div>
    </div>
    </div>
    
    </div>
`
contentElement.innerHTML = _content
