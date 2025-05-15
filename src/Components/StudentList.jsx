import { useContext } from "react"
import { StudentContext } from "./StudentArrContext"
import StuLiItem from "./StuLiItem"


function StudentList() {
    const { studentListArr } = useContext(StudentContext);

    return (
        <div className="bg-gray-300 p-5">
            {
                studentListArr.map((item, index) => {
                    return (
                        <StuLiItem item={item} index={index} />
                    )
                })
            }
        </div>
    )
}

export default StudentList