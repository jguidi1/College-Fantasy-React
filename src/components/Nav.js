import Logo from '../images/Logo.png'

export default function Nav() {


    return (<>
        <div className='grid grid-cols-12 p-5'>
            <div className='col-span-6 md:col-span-3'>
                <img src={Logo} alt="Logo" className='' />
            </div>
            <div className='col-span-6 md:col-span-9'>
                <div className='flex gap-x-5 h-full justify-end'>
                    <button>Sign In</button>
                    <button>Sign Out</button>
                </div>
            </div>
        </div>
     

            </>)
}