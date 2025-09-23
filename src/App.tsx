import { RouterContextProvider, RouterProvider } from "react-router-dom"
import router from "./Router"
import { NoteContext } from "./Context/noteContext"
import { SideBarProvider } from "./Context/sidebarContext"
import { NavbarProvider } from "./Context/navbarContext"
import { EditLabelProvider } from "./Context/editLabelContext"


function App() {


  return (

    <EditLabelProvider>
      <NavbarProvider>
        <SideBarProvider>
          <NoteContext>
            <RouterProvider router={router} />
          </NoteContext>
        </SideBarProvider>
      </NavbarProvider>
    </EditLabelProvider>




  )
}

export default App
