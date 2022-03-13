import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container mx-auto'>
      <div className='header flex justify-between border-b border-slate-300 py-2 text-sm'>
        <div className='flex gap-8'>
          <a href='#' className='text-blue-500'>Chat With Us</a>
          <p>0822 1366 5548</p>
          <p>hallo@maubeliapa.com</p>
        </div>
        <div className=''>
          <ul className='flex gap-8 text-blue-500'>
            <li>Blog</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
      {/* header */}
      <div className='siteInfo flex justify-between py-14'>
        <img src='/images/logo.png'/>
        {/* <h1 className='text-3xl font-bold'>Maubeliapa.com</h1> */}
        <div className='flex w-full justify-center   '>
          <input type="text" className='bg-gray-100 w-2/4 rounded-2xl text-xl pl-3'/>
          <img src='/images/search-icon.png' className='w-4 h-4 self-center -ml-8'/>
        </div>
          <div className='flex gap-5'>
            <img src='/images/user-icon.png' className='w-7 h-7 self-center' />
            <div className='relative w-9 h-9'>
              <img src='/images/cart-icon.png' className='w-full h-full self-center' />
              <div className='absolute -bottom-2 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-center text-white'>4</div>
            </div>
          </div>
      </div>
      {/* navbar */}
      <div className='bg-gray-100 py-5'>
        <ul className='flex w-full gap-14 mx-10'>
          <li>
            <select className='bg-transparent'>
              <option>Komputer</option>
            </select>
          </li>
          <li>
            <select className='bg-transparent'>
              <option>Laptop</option>
            </select>
          </li>
          <li>
            <select className='bg-transparent'>
              <option>Printer</option>
            </select>
          </li>
          <li>
            <select className='bg-transparent'>
              <option>Handphone</option>
            </select>
          </li>
          <li>
            <select className='bg-transparent'>
              <option>Tablet</option>
            </select>
          </li>
          <li>
            <select className='bg-transparent'>
              <option>Game Console</option>
            </select>
          </li>
          <li>
            <select className='bg-transparent'>
              <option>Accesoris</option>
            </select>
          </li>
          
        </ul>
      </div>
      {/* end navbar */}
      {/* side categories */}
      <div className='flex justify-between mt-6'>
      <div className=' w-72 p-3'>
        {/* category */}
        <h3 className='my-4 font-bold text-lg'>Categories</h3>
        <div className='flex justify-between my-4'>
          <div className=''>
            <p>Computer</p>
          </div>
          <div className='bg-slate-100 px-2 rounded-xl'>
            <p className='text-blue-700'>143</p>
          </div>
        </div>
        <div className='flex justify-between my-4'>
          <div className=''>
            <p>Laptop </p>
          </div>
          <div className='bg-slate-100 px-2 rounded-xl'>
            <p className='text-blue-700'>28</p>
          </div>
        </div>
        <div className='flex justify-between my-4'>
          <div className=''>
            <p>Handphone</p>
          </div>
          <div className='bg-slate-100 px-2 rounded-xl'>
            <p className='text-blue-700'>211</p>
          </div>
        </div>
        <div className='flex justify-between my-4'>
          <div className=''>
            <p>Accessoris</p>
          </div>
          <div className='bg-slate-100 px-2 rounded-xl'>
            <p className='text-blue-700'>231</p>
          </div>
        </div>
        {/* order by */}
        <div>
          <h3 className='my-4 font-bold text-lg pt-8'>Order By</h3>
          <div className='flex'>
            <input type='checkbox' className='self-center'/>
            <p className='px-2'>Termurah</p>
          </div>
          <div className='flex'>
            <input type='checkbox' className='self-center'/>
            <p className='px-2'>Terlaris</p>
          </div>
          <div className='flex'>
            <input type='checkbox' className='self-center'/>
            <p className='px-2'>Termahal</p>
          </div>
        </div>
        {/* Rating */}
        <div>
          <h3 className='my-4 font-bold text-lg pt-8'>Rating</h3>
          <div className='flex my-3'>
            <input type='checkbox' className='self-center'/>
            <ul className='flex px-2'>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
            </ul>
          </div>
          <div className='flex my-3'>
            <input type='checkbox' className='self-center'/>
            <ul className='flex px-2'>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star.png'/></li>
            </ul>
          </div>
          <div className='flex my-3'>
            <input type='checkbox' className='self-center'/>
            <ul className='flex px-2'>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star.png'/></li>
              <li><img src='/images/star.png'/></li>
            </ul>
          </div>
          <div className='flex my-3'>
            <input type='checkbox' className='self-center'/>
            <ul className='flex px-2'>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star.png'/></li>
              <li><img src='/images/star.png'/></li>
              <li><img src='/images/star.png'/></li>
            </ul>
          </div>
          <div className='flex my-3'>
            <input type='checkbox' className='self-center'/>
            <ul className='flex px-2'>
              <li><img src='/images/star-full.png'/></li>
              <li><img src='/images/star.png'/></li>
              <li><img src='/images/star.png'/></li>
              <li><img src='/images/star.png'/></li>
              <li><img src='/images/star.png'/></li>
            </ul>
          </div>
        </div>
        {/* Price */}
         <div className="">
            <div className="">
              <input type="range" className="w-48 " />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <label className="text-sm font-bold mb-2">Min</label>
                <input
                  type="text"
                  className="bg-gray-100 border-2 border-blue-200 rounded-2xl p-2 w-20"
                />
              </div>
              <label className="px-4 pt-4">-</label>
              <div className="flex flex-col">
                <label className="text-sm font-bold mb-2">Max</label>
                <input
                  type="text"
                  className="bg-gray-100 border-2 border-blue-200 rounded-2xl p-2 w-20"
                />
              </div>
            </div>
            <div className="flex gap-4 justify-left py-8  items-center">
              <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-2xl text-white w-20 text-center py-2">
                Apply
              </div>
              <div className="text-gray-500">Reset</div>
            </div>
          </div>
        </div>
        {/* Gambar */}
        <div className='mt-4'>
          <div className='flex flex-wrap gap-7'>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4 '>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
              <img src='images/laptop-1.png'/>
                <p className='pt-2 font-bold'>Vivobook Flip TP412FA</p>
                <p className='font-thin'>i3-1005G1 8GB 512</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>10.432.000</p>
                    <p className='text-sm line-through'>12.500.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4'>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
                  <img src='images/laptop-2.jpg'/>
                <p className='pt-2 font-bold'>ASUS ZENBOOK 13 OLED UM325UA</p>
                <p className='font-thin'>R5-5500U 8GB 512GB 13.3"</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>13.000.000</p>
                    <p className='text-sm line-through'>13.299.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4'>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
                  <img src='images/printer-1.jpg'/>
                <p className='pt-2 font-bold'>PRINTER BARCODE THERMAL</p>
                <p className='font-thin'>EP-9200U USB + HOLDER</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>775.000</p>
                    <p className='text-sm line-through'>825.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4'>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
                  <img src='images/battery-1.jpg'/>
                <p className='pt-2 font-bold'>BATRE LAPTOP LENOVO G480</p>
                <p className='font-thin'>ORIGINAL</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>155.000</p>
                    <p className='text-sm line-through'>255.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4'>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
                  <img src='images/pc-1.jpg'/>
                <p className='pt-2 font-bold'>PC Gaming Komputer Rakitan</p>
                <p className='font-thin'>Intel i9 10850K RTX 3070</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>32.000.000</p>
                    <p className='text-sm line-through'>35.000.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4'>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
                  <img src='images/monitor-1.jpg'/>
                <p className='pt-2 font-bold'>Monitor LED LG 29WP500</p>
                <p className='font-thin'>Ultrawide HDR10 IPS 75hz</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>3.049.000</p>
                    <p className='text-sm line-through'>3.500.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4'>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
                  <img src='images/speaker-1.jpg'/>
                <p className='pt-2 font-bold'>VYATTA Platinum Hitz</p>
                <p className='font-thin'>USB/TF-MEGA BASS</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>200.000</p>
                    <p className='text-sm line-through'>300.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
            <div className='relative border-2 border-grey-200 rounded-2xl p-4'>
              <div className='absolute bg-blue-100 p-1 rounded-xl text-sm ml-3 mt-2 text-red-500'>-36%</div>
                  <img src='images/usb-1.png'/>
                <p className='pt-2 font-bold'>Ugreen USB Bluetooth 5.0</p>
                <p className='font-thin'>Dongle PC Smartphone - BT 5.0</p>
                <div className='harga flex justify-between'>
                  <div>
                    <p className='font-bold text-lg'>99.000</p>
                    <p className='text-sm line-through'>100.000</p>
                  </div>
                  <div className="bg-blue-500 border-2 hover:bg-blue-900 rounded-xl text-white w-20 text-center py-2">
                    Buy now!
                  </div>
                </div>
            </div>
          </div>
          <div className="moreproduct flex justify-center mt-20">
            <div className="bg-blue-500 hover:be-blue-900 border-2 rounded-2xl justify-center text-white w-60 py-4 flex gap-2 items-center">
              <p>Show more products</p>
              <img
                src="images/down-icon.png"
                className="w-2 h-2"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
        {/* footer */}
        <div className=" flex justify-left gap-48 pt-20 ">
        <div className="">
          <h2 className="font-bold text-xl">Get in touch</h2>
          <ul className="text-blue-500">
            <li className="py-2">
              <a href="/#">About Us</a>
            </li>
            <li className="py-2">
              <a href="/#">Careers</a>
            </li>
            <li className="py-2">
              <a href="/#">Press Releases</a>
            </li>
            <li className="py-2">
              <a href="/#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">Connections</h2>
          <ul className="text-blue-500">
            <li className="py-2">
              <a href="/#">Facebook</a>
            </li>
            <li className="py-2">
              <a href="/#">Twitter</a>
            </li>
            <li className="py-2">
              <a href="/#">Instagram</a>
            </li>
            <li className="py-2">
              <a href="/#">Youtube</a>
            </li>
            <li className="py-2">
              <a href="/#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">Earning</h2>
          <ul className="text-blue-500">
            <li className="py-2">
              <a href="/#">Become an Affiliate</a>
            </li>
            <li className="py-2">
              <a href="/#">Advertise your prouduct</a>
            </li>
            <li className="py-2">
              <a href="/#">Sell on Market</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">Account</h2>
          <ul className="text-blue-500">
            <li className="py-2">
              <a href="/#">Your account</a>
            </li>
            <li className="py-2">
              <a href="/#">Return Centre</a>
            </li>
            <li className="py-2">
              <a href="/#">100% purchase protection</a>
            </li>
            <li className="py-2">
              <a href="/#">Chat withs us</a>
            </li>
            <li className="py-2">
              <a href="/#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" pt-10 pb-10">Copyright 2022 maubeliapa.com</div>
    </div>
  );
}

export default App;
