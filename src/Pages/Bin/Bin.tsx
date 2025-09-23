
import { MdDelete } from "react-icons/md";
import { useNavbar } from "../../Context/navbarContext";
import EmptyBin from "../../component/Buttons/EmptyBinButton";
import Note from "../../component/Note/Note";
import { useNote } from "../../Context/noteContext";


 const Bin = () => {
    const { layout } = useNavbar();
   const {deletedNotes , setDeletedNotes, Ispinned, setIspinned} =useNote();
  return (
  <>

<div className='flex justify-center items-center p-8 gap-8'>
  <p className='italic'>Notes in the Recycle Bin are deleted after 7 days.</p>
 {  deletedNotes.length != 0 && <EmptyBin/>}
</div>

<main className={`px-4 mt-5 ${layout && 'flex flex-col justify-center items-center gap-4'}`}>
 {
  deletedNotes.length == 0 ? 
  <div className='mt-40 flex flex-col justify-center items-center gap-4'>
  <MdDelete className='h-[100px] w-[100px] text-[#37383A]' />
   <h1 className='text-2xl font-bold text-[#9AA0A6]'>No notes in Recycle Bin</h1>
    </div>
  :
  deletedNotes.map((item ,index)=>{
    return(

<div key={index} className={` mr-8 ${layout ? 'float-none':`float-left`}`}>
  <Note 

              
                  id={item.id}
                  title={item.note}
                  description={item.description}
                   NotePinned={Ispinned}
/>
</div>
    )
  })}
</main>
 
  </>
  )
}

export default Bin;