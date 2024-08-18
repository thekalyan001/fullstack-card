import logo from '../../src/assets/logo.png'

const Navbar = () => {
    return (
        <header class='w-full rounded-t-lg flex border-b sm:px-10 px-5 bg-black font-sans min-h-[60px] tracking-wide relative z-50 '>
            <div class='flex flex-wrap items-center gap-4 w-full'>
                <div className="flex items-center">
                    <a className="flex items-center">
                        <img src={logo} alt="logo" className="w-7" />
                        <span className="ml-0.5 text-lg font-semibold text-white">Abstract</span>
                    </a>
                </div>

                <div class='lg:flex lg:flex-auto  mb-1'>
                    <div>
                        <ul class='flex gap-x-2 space-y-2 '>
                            <div class="border-l border-[#fff] h-4 mt-5 "></div>
                            <li class='border-b py-2 ' style={{ borderBottom: 'none' }}>
                                <a  class='text-[#ffffff] block font-bold text-[15px] '>Help Center</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class='flex items-center ml-auto space-x-6'>

                    <button type="button"
                        class="px-3 py-1.5 rounded-lg text-sm tracking-wider font-medium border border-white outline-none bg-zinc-900 hover:bg-slate-600 text-white hover:text-white transition-all duration-300">Submit a request</button>
                </div>
            </div>
        </header>
    )
};
export default Navbar;