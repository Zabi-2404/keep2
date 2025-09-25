
import Masonry from "react-masonry-css";
import { useNote } from "../../Context/noteContext";
import NoteInput from "../../component/NoteMakingInputField/NoteInput";
import Note from "../../component/Note/Note";



const breakpointColumnsObj = {  
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};



export default function Home() {

  const { StoreNoteChange, setStoreNoteChange, Ispinned, setIspinned } = useNote();

  return (
    <>
      <div className="p-4">
        <NoteInput />
      </div>

      <div className="px-4 mt-10">
        <div className="pl-4 text-[10px]"><h1>PINNED</h1></div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid "
          columnClassName="my-masonry-grid_column"
        >
          {StoreNoteChange.length > 0 && (
            StoreNoteChange.map((item, index) => {
            
              return (
                <Note
                  key={index}
                  id={item.id}
                  title={item.note}
                  description={item.description}
                  NotePinned={item.pinned}
                />

              )
            })

          )}
          
        </Masonry>
      </div>
    </>
  );
}
