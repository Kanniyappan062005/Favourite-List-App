import { useContext } from "react";
import { StudentContext } from "./StudentArrContext";

function StuLiItem(props) {
    const { favStudentListArr, setFavStudentListArr } = useContext(StudentContext);

    const isAlreadyFav = favStudentListArr.includes(props.item);

    const handleAddFav = () => {
        if (!isAlreadyFav) {
            setFavStudentListArr([...favStudentListArr, props.item]);
        }
    };

    return (
        <div className="flex w-[400px] justify-between items-center my-2">
            <p className="font-semibold">{props.index + 1}. {props.item}</p>
            <button
                onClick={handleAddFav}
                disabled={isAlreadyFav}
                className={`py-1 px-2 rounded ${isAlreadyFav ? "bg-gray-500 cursor-not-allowed" : "bg-black text-white"}`}
            >
                {isAlreadyFav ? "Added" : "Add to Favourite"}
            </button>
        </div>
    );
}

export default StuLiItem;
