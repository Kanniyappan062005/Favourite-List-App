import { useContext } from "react";
import { StudentContext } from "./StudentArrContext";

function FavStudentList() {
    const { favStudentListArr, setFavStudentListArr } = useContext(StudentContext);

    const handleRemoveFav = (nameToRemove) => {
        const updatedList = favStudentListArr.filter(name => name !== nameToRemove);
        setFavStudentListArr(updatedList);
    };

    return (
        <div className="bg-purple-300 p-5">
            {favStudentListArr.length === 0 ? (
                <p className="text-center font-bold text-lg text-white">No favourite students yet</p>
            ) : (
                favStudentListArr.map((item, index) => (
                    <div key={index} className="flex w-[400px] justify-between items-center my-2">
                        <p className="font-semibold">{index + 1}. {item}</p>
                        <button
                            className="bg-red-500 text-white py-1 px-2 rounded"
                            onClick={() => handleRemoveFav(item)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default FavStudentList;
