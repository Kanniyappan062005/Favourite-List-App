import { createContext, useState } from "react"

const StudentContext = createContext()

function StudentArrContext(data) {

    const [studentListArr, setStudentListArr] = useState(
        [
            "Barath", "Praveen", "Karthi", "Dharshan", "Monika", 
        ]
    )

    const [favStudentListArr, setFavStudentListArr] = useState([]);

    return (
        <StudentContext.Provider value={{ studentListArr, setStudentListArr,favStudentListArr, setFavStudentListArr }}>
            {data.children}
        </StudentContext.Provider>
    )
}

export default StudentArrContext
export { StudentContext }