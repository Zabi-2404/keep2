
import { IoSearch } from "react-icons/io5";

export default function Input() {
  return (
    <>
     <div className='flex items-center gap-4 bg-[#525355] px-4  py-2 rounded-[8px]  '>
            <IoSearch />
        <input className='outline-none w-full' type="text" 
        placeholder='Search'
        />
        </div>
    </>
  )
}
