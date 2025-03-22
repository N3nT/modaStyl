import { FaArrowDown, FaArrowUp } from "react-icons/fa";
type accordionType = {
    name: string;
    status: boolean;
    handleChangeStatus: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
    border?: true;
}
const Accordion = ({name, status, handleChangeStatus, text, border}:accordionType) => {
    return(
        <div className={`flex flex-col w-full justify-between items-center p-5 ${border ? "border-y-1" : ""}`}>
            <div className="flex w-full justify-between items-center">
                <p>{name}</p>
                {status ? 
                (<FaArrowUp onClick={() => {handleChangeStatus(!status)}} className="text-xl"/>) 
                : 
                (<FaArrowDown onClick={() => {handleChangeStatus(!status)}} className="text-xl"/>)
                }
            </div>
            {status ? 
            (<div className="mt-2 max-w-[410px]"><p>{text}</p></div>) 
            :
            (null)}
        </div>
    )
}

export default Accordion;